import svgPaths from "./svg-wl5q1e3kf2";

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

function Frame() {
  return (
    <div className="absolute left-[15px] size-[48px] top-0" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.p30830400} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="col-1 h-[68px] ml-0 mt-0 relative row-1 w-[84px]">
      <Frame />
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[42px] not-italic text-[#3d3d3d] text-[14px] text-center top-[48px] w-[84px]">
        <p className="mb-0">Propietarios</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[17px] size-[48px] top-0" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.p33bcbc80} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[39.5px] not-italic text-[#3d3d3d] text-[14px] text-center top-[45px] w-[79px]">Inmuebles</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[65px] relative shrink-0 w-[79px]">
      <Group />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[825px] items-start py-[16px] relative shrink-0">
      <Group1 />
      <Frame12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[21px] size-[48px] top-0" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame">
          <path d={svgPaths.pd429180} fill="var(--fill-0, #3D3D3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[45px] not-italic text-[#3d3d3d] text-[14px] text-center top-[48px] w-[90px]">Configurar</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[68px] relative shrink-0 w-[90px]">
      <Group2 />
    </div>
  );
}

function SideNavbar() {
  return (
    <div className="absolute bg-[#dfdfdf] content-stretch flex flex-col gap-[20px] h-[951px] items-center left-0 overflow-clip px-[3px] py-[15px] top-[74px] w-[96px]" data-name="side-navbar">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute h-[46px] left-[115px] top-[91px] w-[308px]" data-name="title">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-0 not-italic text-[#4a4a4a] text-[35px] top-px w-[242px]">Propietarios</p>
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
        <p className="leading-[normal]">{` + Nuevo Propietario`}</p>
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

function Frame3() {
  return (
    <div className="relative shrink-0 size-[66px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Frame">
          <path d={svgPaths.p25106100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[257px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[normal] not-italic relative shrink-0 text-[0px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0 text-[32px]">{`Vaquitas S.A. `}</p>
        <p className="text-[24px]">CUIT 33-13.532.521-2</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[25px] items-center px-[9px] relative shrink-0">
      <Frame3 />
      <Frame27 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pc200000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-full">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[292px]">Esquel, Av.Siempre Viva, 500</p>
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

function Frame25() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(43,155,67,0)] content-stretch flex gap-[15px] h-[48px] items-center pb-[4px] pl-[28px] pr-[10px] pt-[5px] relative rounded-[24px] shrink-0 w-[294px]">
      <div aria-hidden="true" className="absolute border-3 border-[#2b9b43] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#2b9b43] text-[20px] w-[202px]">
        <p className="leading-[normal]">+54 9 2253 545 234</p>
      </div>
      <div className="relative shrink-0 size-[33px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <path clipRule="evenodd" d={svgPaths.p162a7900} fill="var(--fill-0, #2B9B43)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative shrink-0">
      <Frame26 />
      <Frame25 />
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Ver Propiedad/es</p>
      </div>
    </div>
  );
}

function CardPropietario() {
  return (
    <div className="bg-white h-[135px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="card-propietario">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[21px] relative size-full">
          <Frame31 />
          <Frame29 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[66px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Frame">
          <path d={svgPaths.p25106100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[257px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[normal] not-italic relative shrink-0 text-[0px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0 text-[32px]">{`Vaquitas S.A. `}</p>
        <p className="text-[24px]">CUIT 33-13.532.521-2</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center px-[9px] relative shrink-0">
      <Frame28 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame32 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pc200000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-full">
      <Frame7 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[292px]">Esquel, Av.Siempre Viva, 500</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[15px] h-[48px] items-center pb-[4px] pl-[28px] pr-[10px] pt-[5px] relative rounded-[24px] shrink-0 w-[294px]">
      <div aria-hidden="true" className="absolute border-3 border-[#2b9b43] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[202px]">
        <p className="leading-[normal]">+54 9 2253 545 234</p>
      </div>
      <div className="relative shrink-0 size-[33px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <path clipRule="evenodd" d={svgPaths.p162a7900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative shrink-0">
      <Frame33 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Ver Propiedad/es</p>
      </div>
    </div>
  );
}

function CardPropietario1() {
  return (
    <div className="bg-[#2c2c2c] h-[160px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="card-propietario">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[21px] relative size-full">
          <Frame6 />
          <Frame34 />
          <Frame30 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[66px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Frame">
          <path d={svgPaths.p2f795620} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[179px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal] text-[32px]">
            {`Juan Perez `}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[normal] text-[24px]">DNI 13.532.521</span>
        </p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-[366px]">
      <Frame9 />
      <Frame39 />
    </div>
  );
}

function Frame10() {
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

function Frame41() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame10 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pc200000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-full">
      <Frame11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[292px]">Esquel, Av.Siempre Viva, 500</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[rgba(43,155,67,0)] content-stretch flex gap-[15px] h-[48px] items-center pb-[4px] pl-[28px] pr-[10px] pt-[5px] relative rounded-[24px] shrink-0 w-[294px]">
      <div aria-hidden="true" className="absolute border-3 border-[#2b9b43] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#2b9b43] text-[20px] w-[202px]">
        <p className="leading-[normal]">+54 9 2253 545 234</p>
      </div>
      <div className="relative shrink-0 size-[33px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <path clipRule="evenodd" d={svgPaths.p162a7900} fill="var(--fill-0, #2B9B43)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[321px]">
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Ver Propiedad/es</p>
      </div>
    </div>
  );
}

function CardPropietario2() {
  return (
    <div className="bg-white content-stretch flex h-[142px] items-center justify-between overflow-clip px-[14px] py-[21px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1014px]" data-name="card-propietario">
      <Frame38 />
      <Frame40 />
      <Frame44 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[66px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Frame">
          <path d={svgPaths.p25106100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[257px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[normal] not-italic relative shrink-0 text-[0px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0 text-[32px]">{`Vaquitas S.A. `}</p>
        <p className="text-[24px]">CUIT 33-13.532.521-2</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[25px] items-center px-[9px] relative shrink-0">
      <Frame15 />
      <Frame46 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pc200000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-full">
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[292px]">Esquel, Av.Siempre Viva, 500</p>
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

function Frame49() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-[289px]">
      <Frame17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[260px]">juanperez@gmail.com</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[rgba(43,155,67,0)] content-stretch flex gap-[15px] h-[48px] items-center pb-[4px] pl-[28px] pr-[10px] pt-[5px] relative rounded-[24px] shrink-0 w-[294px]">
      <div aria-hidden="true" className="absolute border-3 border-[#2b9b43] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#2b9b43] text-[20px] w-[202px]">
        <p className="leading-[normal]">+54 9 2253 545 234</p>
      </div>
      <div className="relative shrink-0 size-[33px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <path clipRule="evenodd" d={svgPaths.p162a7900} fill="var(--fill-0, #2B9B43)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start px-[8px] relative shrink-0">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Ver Propiedad/es</p>
      </div>
    </div>
  );
}

function CardPropietario3() {
  return (
    <div className="bg-white h-[135px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="card-propietario">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[14px] py-[21px] relative size-full">
          <Frame45 />
          <Frame47 />
          <Frame51 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[66px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g id="Frame">
          <path d={svgPaths.p2f795620} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[179px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal] text-[32px]">
            {`Juan Perez `}
            <br aria-hidden="true" />
          </span>
          <span className="leading-[normal] text-[24px]">DNI 13.532.521</span>
        </p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-[366px]">
      <Frame18 />
      <Frame53 />
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

function Frame55() {
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
        <g id="Frame">
          <path d={svgPaths.pc200000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] items-start overflow-clip relative shrink-0 w-full">
      <Frame20 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[292px]">Esquel, Av.Siempre Viva, 500</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[9px] items-start relative shrink-0">
      <Frame21 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[230px]">2253 958 2353</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[321px]">
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Ver Propiedad/es</p>
      </div>
    </div>
  );
}

function CardPropietario4() {
  return (
    <div className="bg-white content-stretch flex h-[142px] items-center justify-between overflow-clip px-[14px] py-[21px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1014px]" data-name="card-propietario">
      <Frame52 />
      <Frame54 />
      <Frame58 />
    </div>
  );
}

function ListPropietarios() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[813px] items-start overflow-clip p-[10px] relative shrink-0 w-[1034px]" data-name="list-propietarios">
      <CardPropietario />
      <CardPropietario1 />
      <CardPropietario2 />
      <CardPropietario3 />
      <CardPropietario4 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[871px] items-center left-[236px] top-[154px]" data-name="list">
      <Cta />
      <ListPropietarios />
    </div>
  );
}

export default function ListaPropietarios() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Lista Propietarios">
      <Navbar />
      <SideNavbar />
      <Title />
      <List />
    </div>
  );
}