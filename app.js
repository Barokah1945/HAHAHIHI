const sheetURL = 'https://docs.google.com/spreadsheets/d/15g0UFq0fLNbyORzKiITkLzlRduUSvi6TEFhVqoQOedM/gviz/tq?tqx=out:json';

async function fetchData() {
  const res = await fetch(sheetURL);
  const text = await res.text();
  const json = JSON.parse(text.substr(47).slice(0, -2));
  const data = json.table.rows.map(row => {
    const c = row.c;
    return {
      nama: c[0]?.v,
      harga: parseInt(c[1]?.v) || 0,
      gambar: c[2]?.v,
      kategori: c[3]?.v,
      aktif: (c[4]?.v || '').toLowerCase() === 'yes',
      hari_kirim: c[5]?.v || '',
      stok: parseInt(c[6]?.v) || 0
    };
  }).filter(p => p.aktif && p.stok > 0);

  const isPreorder = location.pathname.includes("preorder");
  const list = document.getElementById("productList");
  const cart = [];
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nama} x ${item.qty} = Rp${item.qty * item.harga}`;
      cartItems.appendChild(li);
      total += item.qty * item.harga;
    });
    cartTotal.textContent = `Rp${total}`;
  }

  function addToCart(prod) {
    const qty = parseInt(prompt("Masukkan jumlah:", "1"));
    if (!qty) return;
    const found = cart.find(i => i.nama === prod.nama);
    if (found) found.qty += qty;
    else cart.push({...prod, qty});
    updateCart();
  }

  function renderProducts(prods) {
    list.innerHTML = '';
    prods.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.gambar}" style="max-width:100%">
        <h3>${p.nama}</h3>
        <p>Rp${p.harga}</p>
        <p><small>${p.kategori} | ${p.hari_kirim}</small></p>
        <button onclick='(${isPreorder ? 'addToCart' : 'window.open(`https://wa.me/?text=Saya mau beli ${p.nama}`)'})(JSON.parse(\`${JSON.stringify(p)}\`))'>
          ${isPreorder ? 'Tambah ke Keranjang' : 'Beli Sekarang'}
        </button>`;
      list.appendChild(div);
    });
  }

  renderProducts(data);

  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (!cart.length) return alert("Keranjang kosong!");
    const msg = cart.map(i => `${i.nama} x ${i.qty}`).join(", ");
    const total = cart.reduce((sum, i) => sum + i.qty * i.harga, 0);
    const url = `https://wa.me/?text=Halo, saya ingin order: ${msg} - Total: Rp${total}. Sudah transfer via QRIS/BCA.`;
    window.open(url, "_blank");
  });
}
fetchData();