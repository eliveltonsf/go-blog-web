export default function Footer() {
  return (
    <section className="flex justify-between items-center h-[8rem] w-full mt-[40rem] border-t border-t-primary">
      <div className="flex justify-start items-center w-[50%]">
        <p>2024 | Todos os direitos reservados.</p>
      </div>
      <div className="flex justify-end items-center w-[50%]">
        social
        {/* <img src={facebook} className="icon-link icon-s" alt="" />
          <img src={instagram} className="icon-link icon-s ml-2" alt="" />
          <img src={youtube} className="icon-link icon-s ml-2" alt="" />
          <img src={twitter} className="icon-link icon-s ml-2" alt="" /> */}
      </div>
    </section>
  );
}
