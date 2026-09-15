import ApparelCard from '../../../components/Card-2';

export default function FemaleProductPage() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-3">
        <ApparelCard
          jenisProduk="Hitam Basic"
          linkProduk="https://erigostore.co.id/cdn/shop/files/T-SHIRT-OVERSIZE-ANTELOPE-BLACK-100.jpg?v=1750320047"
          deskripsi='Kaos hitam dengan desain minimalis dan logo ERIGO di bagian dada. Berbahan cotton combed dengan potongan yang nyaman untuk digunakan sehari-hari.'
        />
        <ApparelCard
          jenisProduk="Olive Graphic"
          linkProduk="https://erigostore.co.id/cdn/shop/files/id-11134201-7ra0n-mc8r5r4ildggf1.jpg?v=1753156605&width=1946"
          deskripsi='Kaos warna olive dengan desain grafis mobil bergaya retro di bagian belakang. Memiliki regular fit yang ringan dan cocok untuk tampilan casual.'
        />
        <ApparelCard
          jenisProduk="Hitam Adventure"
          linkProduk="https://erigostore.co.id/cdn/shop/files/T-SHIRT-ADVENTURE-SURFING-BLACK-100.jpg?v=1750319280&width=416"
          deskripsi='Kaos hitam dengan graphic bertema Adventure di bagian belakang. Desainnya memberikan kesan sporty dan casual, cocok untuk aktivitas santai maupun outdoor.'
        />
        <ApparelCard
          jenisProduk="Olive Graphic Print"
          linkProduk="https://erigostore.co.id/cdn/shop/files/id-11134201-7ra0i-mc8r5mof3nt156.jpg?v=1753156633"
          deskripsi='Kaos olive dengan ilustrasi grafis bernuansa vintage pada bagian belakang. Menghadirkan gaya casual yang simpel namun tetap menarik.'
        />
        <ApparelCard
          jenisProduk="Hitam Graphic"
          linkProduk="https://erigostore.co.id/cdn/shop/files/id-11134275-7ra0h-mbrwgpnohqdia4.jpg?v=1751805665"
          deskripsi='Kaos hitam dengan ilustrasi karakter dan typography di bagian belakang. Perpaduan warna dan desainnya memberikan tampilan yang lebih bold dan stylish.'
        />
        <ApparelCard
          jenisProduk="Long Sleeve Hitam"
          linkProduk="https://erigostore.co.id/cdn/shop/files/id-11134275-7ra0q-md4584daqxf9ac.jpg?v=1754549525&width=416"
          deskripsi='Kaos lengan panjang berwarna hitam dengan graphic print di bagian depan. Memiliki desain simpel dan versatile, cocok dipadukan dengan berbagai outfit casual.'
        />
      </div>
    </>
  );
}
