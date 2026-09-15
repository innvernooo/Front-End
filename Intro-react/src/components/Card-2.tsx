interface apparelCardProps {
  jenisProduk: string;
  linkProduk: string;
  deskripsi: string;
}

export default function ApparelCard ({jenisProduk, linkProduk, deskripsi}: apparelCardProps) {
  return (
    <>
    <div className="card bg-base-100 w-100% shadow-sm">
  <figure>
    <img
      src={linkProduk}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-[#800020] rounded-b-md">
    <span className="bg-[#F3E6D5] w-100% rounded-md"><h2 className="card-title ml-2 text-black">{jenisProduk}</h2></span> 
    <p>{deskripsi}</p>
  </div>
</div>
    </>
  );
}