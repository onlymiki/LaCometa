import SocialBar from "./SocialBar";

function Footer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="flex flex-col text-center items-center p-8 text-gray-700">
          <p className="text-2xl font-['Krona_One'] pb-2 text-orange-600 ">
            Pizzeria
            <span className="uppercase tracking-[0.25em]"> La Cometa</span>
          </p>
          <p className="text-gray-50">P.IVA 06909880962</p>
          <a className="text-gray-50" href="#">
            Via Gramsci, 43 - Gaggiano (MI)
          </a>
          <p className="text-gray-50">
            {" "}
            Tel. 02 908 69 25 - Cell. 339 311 92 52
          </p>
          <div className="mt-4">
            <SocialBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
