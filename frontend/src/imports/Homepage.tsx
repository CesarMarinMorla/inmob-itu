import svgPaths from "./svg-cb4eqbel05";

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

function H2Subtitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="h2-subtitle">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[35px] text-black text-center whitespace-nowrap">
            <p className="leading-[normal]">Hola, bienvenido</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function H1Gretting() {
  return (
    <div className="relative shrink-0 w-full" data-name="h1-gretting">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center whitespace-nowrap">
            <p className="leading-[normal]">¿Qué deseas hacer hoy?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[483px]">
      <H2Subtitle />
      <H1Gretting />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="icon">
          <path d={svgPaths.p3725c500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[330px]">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[45px] py-[108px] relative rounded-[inherit] size-full">
        <Icon />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[79px] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center w-[237px]">
          <p className="leading-[normal]">Ver Propietarios</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InmueblesIcon1() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="inmuebles-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g id="inmuebles-icon">
          <path d={svgPaths.p10ae8480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[330px]">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[32px] py-[99px] relative rounded-[inherit] size-full">
        <InmueblesIcon1 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[79px] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-black text-center w-[237px]">
          <p className="leading-[normal]">Ver Inmuebles</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[137px] items-center relative shrink-0 w-[797px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-[275px] top-[152px]">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[950px] left-[96px] top-[74px] w-[1344px]" data-name="main">
      <Frame5 />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Homepage">
      <Navbar />
      <SideNavbar />
      <Main />
    </div>
  );
}