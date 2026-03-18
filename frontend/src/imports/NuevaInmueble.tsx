import svgPaths from "./svg-0zy793fvba";

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

function Frame1() {
  return (
    <div className="relative shrink-0 size-[47px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="Frame">
          <path d={svgPaths.p1d85cb80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function H2Title() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="h2-title">
      <Frame1 />
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[34px] leading-[normal] not-italic relative shrink-0 text-[35px] text-black w-[348px]">
        <p className="mb-0">Nuevo Inmueble</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="title">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[566px]">Propietario</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Seleccioná al Propietario</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[9px] size-[32px] top-[8px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p2e6b3190} fill="var(--fill-0, #A8A8A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#e9e9e9] h-[48px] relative shrink-0 w-full" data-name="search-bar">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Frame2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[48px] not-italic text-[#9a9a9a] text-[20px] top-[12px] w-[116px]">Buscar...</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pfb10b00} fill="var(--fill-0, #F3F3F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#818181] content-stretch flex items-start justify-center overflow-clip px-[15px] py-[7px] relative shrink-0 w-[295px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[185px]">
        <p className="leading-[normal]">Ingresar nuevo propietario</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame">
          <path d={svgPaths.p1d76bb80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] relative shrink-0 w-[295px]">
      <Frame4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[196px]">
        <p className="leading-[normal]">prop. Pedro Pérez</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame">
          <path d={svgPaths.p1d76bb80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] relative shrink-0 w-[295px]">
      <Frame6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[196px]">
        <p className="leading-[normal]">prop. Pedro Pérez</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame">
          <path d={svgPaths.p1d76bb80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] relative shrink-0 w-[295px]">
      <Frame7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[196px]">
        <p className="leading-[normal]">prop. Pedro Pérez</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame">
          <path d={svgPaths.p1d76bb80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[7px] relative shrink-0 w-[307px]">
      <Frame8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black w-[196px]">
        <p className="leading-[normal]">prop. Pedro Pérez</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#e0e0e0] h-[217px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <Frame22 />
          <Frame5 />
          <Frame23 />
          <Frame24 />
          <Frame25 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col h-[265px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <SearchBar />
      <Frame26 />
    </div>
  );
}

function PropietarioSelector() {
  return (
    <div className="content-stretch flex flex-col h-[289px] items-start overflow-clip relative shrink-0 w-[329px]" data-name="propietario-selector">
      <Frame48 />
      <Frame47 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <PropietarioSelector />
    </div>
  );
}

function SectionPropietario() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[329px] items-start overflow-clip relative shrink-0 w-full" data-name="section-propietario">
      <Title />
      <Frame46 />
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="location-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="location-icon">
          <path d={svgPaths.p22bea580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DomicilioTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="domicilio-title">
      <LocationIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Dirección</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[169px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-0">
      <div aria-hidden="true" className="absolute border-black border-l border-solid inset-0 pointer-events-none" />
      <Frame10 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[38px] relative shrink-0 w-[207px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[76.5px] not-italic text-[20px] text-black text-center top-[19.5px] w-[151px]">
          <p className="leading-[normal]">Seleccionar</p>
        </div>
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ProvinciaSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-name="provincia-selector">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Provincia*</p>
      <TextInput />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[169px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-0">
      <div aria-hidden="true" className="absolute border-black border-l border-solid inset-0 pointer-events-none" />
      <Frame12 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[207px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[76.5px] not-italic text-[20px] text-black text-center top-[19.5px] w-[151px]">
          <p className="leading-[normal]">Seleccionar</p>
        </div>
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LocalidadSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-name="localidad-selector">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Localidad*</p>
      <TextInput1 />
    </div>
  );
}

function ProvinciaLocalidad() {
  return (
    <div className="content-stretch flex gap-[13px] items-start relative shrink-0 w-full" data-name="provincia-localidad">
      <ProvinciaSelector />
      <LocalidadSelector />
    </div>
  );
}

function InputNombreSegundo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Calle</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-full relative shrink-0 w-[274px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput2 />
    </div>
  );
}

function NombreCalle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="nombre-calle">
      <InputNombreSegundo />
      <Text />
    </div>
  );
}

function InputNombreSegundo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Número</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-full relative shrink-0 w-[114px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput3 />
    </div>
  );
}

function Numero() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="número">
      <InputNombreSegundo1 />
      <Text1 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[19px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckNumero() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-start relative shrink-0 w-[142px]" data-name="check-numero?">
      <Frame27 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[19px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[110px]">Sin Número</p>
    </div>
  );
}

function Calle() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="calle">
      <NombreCalle />
      <Numero />
      <CheckNumero />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombreSegundo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Código postal*</p>
      <TextInput4 />
    </div>
  );
}

function CodigoPostal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152px]" data-name="codigo-postal">
      <InputNombreSegundo2 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="h-[38px] relative shrink-0 w-[227px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombreSegundo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[227px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Barrio</p>
      <TextInput5 />
    </div>
  );
}

function BarrioInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="barrio-input">
      <InputNombreSegundo3 />
    </div>
  );
}

function InputNombreSegundo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[72px]">Piso</p>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="h-full relative shrink-0 w-[68px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput6 />
    </div>
  );
}

function PisoInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[68px]" data-name="piso-input">
      <InputNombreSegundo4 />
      <Text2 />
    </div>
  );
}

function InputNombreSegundo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Depto</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="h-full relative shrink-0 w-[71px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[71px]" data-name="text">
      <TextInput7 />
    </div>
  );
}

function DeptoInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="depto-input">
      <InputNombreSegundo5 />
      <Text3 />
    </div>
  );
}

function Detalles() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full" data-name="detalles">
      <BarrioInput />
      <PisoInput />
      <DeptoInput />
    </div>
  );
}

function DomicilioSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="domicilio-section">
      <div className="content-stretch flex flex-col gap-[18px] items-start p-[10px] relative w-full">
        <DomicilioTitle />
        <ProvinciaLocalidad />
        <Calle />
        <CodigoPostal />
        <Detalles />
      </div>
    </div>
  );
}

function TitleFechaNacimiento() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="title-fechaNacimiento">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] min-h-px min-w-px not-italic relative text-[25px] text-black">Tipo de Inmueble</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DropDownButton() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[235.5px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-0" data-name="drop-down-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame13 />
    </div>
  );
}

function TextInput8() {
  return (
    <div className="h-[38px] relative shrink-0 w-[274px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">Departamento</p>
        </div>
        <DropDownButton />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DateSelector() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date-selector">
      <TextInput8 />
    </div>
  );
}

function InputFechaNacimiento() {
  return (
    <div className="relative shrink-0 w-full" data-name="input-fecha-nacimiento">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-center justify-center p-[10px] relative w-full">
          <TitleFechaNacimiento />
          <DateSelector />
        </div>
      </div>
    </div>
  );
}

function InputNombreSegundo6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end py-[5px] relative shrink-0 w-[134px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-full">Ambientes</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pb59ed00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput9() {
  return (
    <div className="h-full relative shrink-0 w-[43px]" data-name="text-input">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[68px]">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-start justify-center relative shrink-0 w-full" data-name="text">
      <Frame28 />
      <TextInput9 />
      <Frame29 />
    </div>
  );
}

function InputNombreSegundo7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end py-[5px] relative shrink-0 w-[134px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-full">Baños</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pb59ed00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput10() {
  return (
    <div className="h-full relative shrink-0 w-[43px]" data-name="text-input">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[68px]">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-start justify-center relative shrink-0 w-full" data-name="text">
      <Frame31 />
      <TextInput10 />
      <Frame32 />
    </div>
  );
}

function InputNombreSegundo8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-full">Habitaciones</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pb59ed00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput11() {
  return (
    <div className="h-full relative shrink-0 w-[43px]" data-name="text-input">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[68px]">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-center justify-center relative shrink-0 w-full" data-name="text">
      <Frame33 />
      <TextInput11 />
      <Frame34 />
    </div>
  );
}

function PisoInput1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126px]" data-name="piso-input">
      <InputNombreSegundo8 />
      <Text6 />
    </div>
  );
}

function InputNombreSegundo9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 py-[5px] top-0 w-[126px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-full">Cocheras</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pb59ed00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame20 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput12() {
  return (
    <div className="h-full relative shrink-0 w-[43px]" data-name="text-input">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[68px]">
          <p className="leading-[normal]">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#d9d9d9] h-[38px] relative shrink-0">
      <div className="content-stretch flex h-full items-center overflow-clip py-[6px] relative rounded-[inherit]">
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[38px] items-center justify-center left-0 top-[34px] w-[126px]" data-name="text">
      <Frame35 />
      <TextInput12 />
      <Frame36 />
    </div>
  );
}

function PisoInput2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[126px]" data-name="piso-input">
      <InputNombreSegundo9 />
      <Text7 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[50px] items-start p-[10px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="piso-input">
            <InputNombreSegundo6 />
            <Text4 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="piso-input">
            <InputNombreSegundo7 />
            <Text5 />
          </div>
          <PisoInput1 />
          <PisoInput2 />
        </div>
      </div>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckBox6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="check-box">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[146.667px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-x-[30px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] p-[10px] relative size-full">
          <div className="col-1 content-stretch flex gap-[6px] items-start relative row-1 self-start shrink-0 w-[167px]" data-name="check-selector">
            <CheckBox />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Patio / Jardín</p>
          </div>
          <div className="col-2 content-stretch flex gap-[6px] items-start relative row-1 self-start shrink-0 w-[155px]" data-name="check-selector">
            <CheckBox1 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Balcón</p>
          </div>
          <div className="col-1 content-stretch flex gap-[6px] items-start relative row-2 self-start shrink-0 w-[155px]" data-name="check-selector">
            <CheckBox2 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Piscina</p>
          </div>
          <div className="col-1 content-stretch flex gap-[6px] items-start relative row-3 self-start shrink-0 w-[113px]" data-name="check-selector">
            <CheckBox3 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">SUM</p>
          </div>
          <div className="col-2 content-stretch flex gap-[6px] items-start relative row-2 self-start shrink-0 w-[167px]" data-name="check-selector">
            <CheckBox4 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Lavadero</p>
          </div>
          <div className="col-2 content-stretch flex gap-[6px] items-start relative row-3 self-start shrink-0 w-[113px]" data-name="check-selector">
            <CheckBox5 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Terraza</p>
          </div>
          <div className="col-1 content-stretch flex gap-[6px] items-start relative row-4 self-start shrink-0 w-[155px]" data-name="check-selector">
            <CheckBox6 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[20px] text-black">Gimnasio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaracteristicasSection() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full" data-name="caracteristicas-section">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">{`Características `}</p>
        <p>&nbsp;</p>
      </div>
      <Frame30 />
      <Frame37 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[566px] whitespace-pre-wrap">
        <p className="mb-0">Fotografías</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute border border-black border-solid left-[10px] overflow-clip size-[218px] top-[10px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[68px] not-italic text-[14px] text-black top-[101px] w-[126px]">Vista Previa</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute h-[218px] left-[238px] top-[10px] w-[318px]">
      <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] overflow-clip px-[20px] py-[32px] relative rounded-[inherit] size-full">
        <Frame42 />
        <Frame43 />
        <Frame44 />
        <Frame45 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[238px] overflow-clip relative shrink-0 w-[566px]">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function SectionFotografias() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="section-fotografias">
      <Frame41 />
      <Frame38 />
    </div>
  );
}

function CancelarButton() {
  return (
    <div className="bg-white h-[41px] relative shrink-0" data-name="cancelar-button">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[41px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center w-[130px]">
          <p className="leading-[normal]">Cancelar</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function GuardarButton() {
  return (
    <div className="bg-[#303030] content-stretch flex h-[41px] items-center justify-center overflow-clip p-[10px] relative shrink-0" data-name="guardar-button">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[41px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white w-[130px]">
        <p className="leading-[normal]">Guardar</p>
      </div>
    </div>
  );
}

function FormButtons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[518px]" data-name="form-buttons">
      <CancelarButton />
      <GuardarButton />
    </div>
  );
}

function FormFrame() {
  return (
    <div className="h-[1866px] relative shrink-0 w-full" data-name="form-frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[20px] relative size-full">
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <SectionPropietario />
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <DomicilioSection />
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <InputFechaNacimiento />
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <CaracteristicasSection />
          <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
                <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <SectionFotografias />
          <FormButtons />
        </div>
      </div>
    </div>
  );
}

function InmuebleForm() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[23px] h-[2040px] items-start left-[341px] px-[30px] py-[20px] top-[129px]" data-name="inmueble-form">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <H2Title />
      <FormFrame />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] not-italic relative shrink-0 text-[15px] text-black w-full">Inmuebles / Nuevo inmueble</p>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[950px] left-[96px] overflow-clip top-[74px] w-[1344px]" data-name="main">
      <InmuebleForm />
      <H />
    </div>
  );
}

function GoBackButton() {
  return (
    <div className="absolute bg-white content-stretch flex h-[25px] items-center justify-center left-[112px] p-[10px] top-[167px] w-[87px]" data-name="goBack-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Volver</p>
    </div>
  );
}

export default function NuevaInmueble() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Nueva inmueble">
      <Navbar />
      <SideNavbar />
      <Main />
      <GoBackButton />
    </div>
  );
}