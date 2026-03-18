import svgPaths from "./svg-gote3u0n64";

function BtnUserProfile() {
  return (
    <div className="absolute left-[1370px] size-[48px] top-[13px]" data-name="btn-user-profile">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="btn-user-profile">
          <path d={svgPaths.p31f5f200} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnBell() {
  return (
    <div className="absolute left-[1313px] size-[48px] top-[15px]" data-name="btn-bell">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="btn-bell">
          <path d={svgPaths.p2b054151} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bg-[#919191] h-[48px] left-[18px] overflow-clip top-[13px] w-[253px]" data-name="logo">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[5px] not-italic text-[#f3f3f3] text-[25px] top-[calc(50%-14px)] w-[241px]">ORGANIZACIÓN CR</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[#c1c1c1] h-[74px] left-0 overflow-clip top-0 w-[1441px]" data-name="navbar">
      <BtnUserProfile />
      <BtnBell />
      <Logo />
    </div>
  );
}

function PersonIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="person-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="person-icon">
          <path d={svgPaths.p30830400} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PersonButton() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="person-button">
      <PersonIcon />
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-[84px]">
        <p className="mb-0">Propietarios</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function InmueblesIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="inmuebles-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="inmuebles-icon">
          <path d={svgPaths.p33bcbc80} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InmueblesButton() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="inmuebles-button">
      <InmueblesIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-[79px]">Inmuebles</p>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[825px] items-start py-[16px] relative shrink-0" data-name="div">
      <PersonButton />
      <InmueblesButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.pd429180} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonConfiguracion() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[90px]" data-name="button-configuracion">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-full">Configurar</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col h-[91px] items-start relative shrink-0" data-name="div">
      <ButtonConfiguracion />
    </div>
  );
}

function SideNavbar() {
  return (
    <div className="absolute bg-[#dfdfdf] content-stretch flex flex-col gap-[20px] h-[950px] items-center left-0 overflow-clip px-[3px] py-[15px] top-[74px] w-[96px]" data-name="side-navbar">
      <Div />
      <Div1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="icon">
          <path d={svgPaths.p14294f80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-start pl-[9px] pr-[250px] pt-[4px] relative rounded-[18px] shrink-0 w-[291px]" data-name="search-bar">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Icon />
      <div className="flex flex-col font-['Inter:Extra_Light_Italic',sans-serif] font-extralight h-[44px] italic justify-center leading-[0] relative shrink-0 text-[20px] text-black w-[131px]">
        <p className="leading-[normal]">Buscar...</p>
      </div>
    </div>
  );
}

function BtnNuevoAlquiler() {
  return (
    <div className="bg-[#3d3d3d] content-stretch flex h-[48px] items-center justify-center overflow-clip pt-[4px] px-px relative shrink-0 w-[213px]" data-name="btn-nuevo-alquiler">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">{` + Nuevo Inmueble`}</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1015px]" data-name="CTA">
      <SearchBar />
      <BtnNuevoAlquiler />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Reservada</p>
      </div>
    </div>
  );
}

function ImgInmueble() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame29 />
        <Frame30 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame62 />
        <ImgInmueble />
        <Frame35 />
        <Frame33 />
        <Frame63 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
    </div>
  );
}

function ImgInmueble1() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[5px] items-start justify-center relative shrink-0">
      <div className="content-stretch flex items-start overflow-clip p-[5px] relative shrink-0 size-[24px]" data-name="Frame">
        <div className="relative shrink-0 size-[14px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Asignar propietario</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white content-stretch flex h-[24px] items-start justify-center overflow-clip relative shrink-0">
      <Frame65 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[8px] relative w-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble1() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame64 />
        <ImgInmueble1 />
        <Frame36 />
        <Frame37 />
        <Frame66 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Alquilada</p>
      </div>
    </div>
  );
}

function ImgInmueble2() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame42 />
        <Frame43 />
        <Frame44 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble2() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame67 />
        <ImgInmueble2 />
        <Frame39 />
        <Frame41 />
        <Frame68 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Reservada</p>
      </div>
    </div>
  );
}

function ImgInmueble3() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame48 />
        <Frame49 />
        <Frame50 />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Reservada</p>
      </div>
    </div>
  );
}

function ImgInmueble4() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame54 />
        <Frame55 />
        <Frame56 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble4() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame71 />
        <ImgInmueble4 />
        <Frame51 />
        <Frame53 />
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
    </div>
  );
}

function ImgInmueble5() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame9 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame60 />
        <Frame61 />
        <Frame74 />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble5() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame73 />
        <ImgInmueble5 />
        <Frame57 />
        <Frame59 />
        <Frame75 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Alquilada</p>
      </div>
    </div>
  );
}

function ImgInmueble6() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame78 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame12 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame80 />
        <Frame81 />
        <Frame82 />
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble6() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame76 />
        <ImgInmueble6 />
        <Frame77 />
        <Frame79 />
        <Frame83 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function CardInmueble3() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame69 />
        <ImgInmueble3 />
        <Frame45 />
        <Frame47 />
        <Frame70 />
        <CardInmueble4 />
        <CardInmueble5 />
        <CardInmueble6 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
    </div>
  );
}

function ImgInmueble7() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame88 />
        <Frame89 />
        <Frame90 />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Reservada</p>
      </div>
    </div>
  );
}

function ImgInmueble8() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame94 />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame96 />
        <Frame97 />
        <Frame98 />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble8() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame92 />
        <ImgInmueble8 />
        <Frame93 />
        <Frame95 />
        <Frame99 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
    </div>
  );
}

function ImgInmueble9() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame102 />
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame104 />
        <Frame105 />
        <Frame106 />
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble9() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame100 />
        <ImgInmueble9 />
        <Frame101 />
        <Frame103 />
        <Frame107 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Alquilada</p>
      </div>
    </div>
  );
}

function ImgInmueble10() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame110 />
        </div>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame20 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame112 />
        <Frame113 />
        <Frame114 />
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble10() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame108 />
        <ImgInmueble10 />
        <Frame109 />
        <Frame111 />
        <Frame115 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function CardInmueble7() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame84 />
        <ImgInmueble7 />
        <Frame85 />
        <Frame87 />
        <Frame91 />
        <CardInmueble8 />
        <CardInmueble9 />
        <CardInmueble10 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Alquilada</p>
      </div>
    </div>
  );
}

function ImgInmueble11() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame118 />
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame21 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame22 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame120 />
        <Frame121 />
        <Frame122 />
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Reservada</p>
      </div>
    </div>
  );
}

function ImgInmueble12() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame126 />
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame23 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame24 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame128 />
        <Frame129 />
        <Frame130 />
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble12() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame124 />
        <ImgInmueble12 />
        <Frame125 />
        <Frame127 />
        <Frame131 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame132() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
    </div>
  );
}

function ImgInmueble13() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame25 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame26 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame136 />
        <Frame137 />
        <Frame138 />
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble13() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame132 />
        <ImgInmueble13 />
        <Frame133 />
        <Frame135 />
        <Frame139 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame140() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center w-[112px]">
        <p className="leading-[normal]">Alquilada</p>
      </div>
    </div>
  );
}

function ImgInmueble14() {
  return (
    <div className="h-[166px] relative shrink-0 w-[344px]" data-name="img-inmueble">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 166">
        <g id="img-inmueble">
          <g clipPath="url(#clip0_1_1497)">
            <line id="Line 1" stroke="var(--stroke-0, black)" x1="-0.217264" x2="341.783" y1="164.3" y2="-0.700326" />
            <line id="Line 2" stroke="var(--stroke-0, black)" transform="matrix(-0.900658 -0.434528 -0.434528 0.900658 343 165.75)" x2="379.722" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="165" stroke="var(--stroke-0, black)" width="343" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1497">
            <rect fill="white" height="166" width="344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[282px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[normal]">Esquel, Av.Siempre Viva, 500</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[9px] relative w-full">
          <Frame142 />
        </div>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p13314400} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">Juan Pérez</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame27 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame28 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative w-full">
        <Frame144 />
        <Frame145 />
        <Frame146 />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip pl-[17px] relative shrink-0 w-[342px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[178px]">$ 500.000 ARS</p>
    </div>
  );
}

function CardInmueble14() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame140 />
        <ImgInmueble14 />
        <Frame141 />
        <Frame143 />
        <Frame147 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function CardInmueble11() {
  return (
    <div className="bg-white h-[413px] relative shrink-0 w-[380px]" data-name="card-inmueble">
      <div className="content-stretch flex flex-col gap-[10px] items-center overflow-clip px-[14px] py-[21px] relative rounded-[inherit] size-full">
        <Frame116 />
        <ImgInmueble11 />
        <Frame117 />
        <Frame119 />
        <Frame123 />
        <CardInmueble12 />
        <CardInmueble13 />
        <CardInmueble14 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ListPropietarios() {
  return (
    <div className="content-start flex flex-wrap gap-[10px] h-[813px] items-start overflow-clip p-[10px] relative shrink-0 w-[1212px]" data-name="list-propietarios">
      <CardInmueble />
      <CardInmueble1 />
      <CardInmueble2 />
      <CardInmueble3 />
      <CardInmueble7 />
      <CardInmueble11 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[871px] items-center left-[66px] top-[110px]" data-name="list">
      <Cta />
      <ListPropietarios />
    </div>
  );
}

function H1Title() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="h1-title">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-0 not-italic text-[#4a4a4a] text-[35px] top-px w-[242px]">Inmuebles</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[12px] w-[308px]" data-name="h1">
      <H1Title />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[950px] left-[96px] top-[74px] w-[1344px]" data-name="main">
      <List />
      <H />
    </div>
  );
}

export default function Inmuebles() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Inmuebles">
      <Navbar />
      <SideNavbar />
      <Main />
    </div>
  );
}