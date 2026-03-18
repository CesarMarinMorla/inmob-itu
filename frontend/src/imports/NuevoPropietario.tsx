import svgPaths from "./svg-2kn03d6qcu";

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

function H1Title() {
  return (
    <div className="absolute h-[46px] left-[16px] top-[12px] w-[308px]" data-name="h1-title">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[36px] leading-[normal] left-0 not-italic text-[#4a4a4a] text-[35px] top-px w-[242px]">Propietarios</p>
    </div>
  );
}

function GoBackButton() {
  return (
    <div className="absolute bg-white content-stretch flex h-[25px] items-center justify-center left-[23px] p-[10px] top-[87px] w-[87px]" data-name="goBack-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Volver</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Frame">
          <path d={svgPaths.p12cac100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#575757] relative shrink-0 w-[208px]" data-name="text-input">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Frame1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[139px]">
          <p className="leading-[normal]">Persona Física</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pbd0f500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="relative shrink-0 w-[208px]" data-name="text-input">
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Frame2 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[38px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center w-[82px]">
          <p className="leading-[normal]">Empresa</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ToggleButtonGroup() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="toggle-button-group">
      <TextInput />
      <TextInput1 />
    </div>
  );
}

function PersonIcon1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="person-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="person-icon">
          <path d={svgPaths.p12cac100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NombresTitle() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="nombres-title">
      <PersonIcon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[31px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[475px]">Nombres</p>
    </div>
  );
}

function TextInputBox() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input-box">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">Juan...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombre() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-nombre">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Primer nombre*</p>
      <TextInputBox />
    </div>
  );
}

function TextInputBox1() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input-box">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">Ignacio...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombreSegundo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Segundo nombre</p>
      <TextInputBox1 />
    </div>
  );
}

function DivNombres() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full" data-name="div-nombres">
      <InputNombre />
      <InputNombreSegundo />
    </div>
  );
}

function NombresInputs() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="nombres-inputs">
      <NombresTitle />
      <DivNombres />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="person-icon">
          <path d={svgPaths.p12cac100} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Frame3 />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] min-h-px min-w-px not-italic relative text-[25px] text-black">Apellidos</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">López...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputApellidoPrimero() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-apellido-primero">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Primer apellido*</p>
      <TextInput2 />
    </div>
  );
}

function Input() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">Herrero...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputApellidoSegundo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-apellido-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Segundo apellido</p>
      <Input />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full">
      <InputApellidoPrimero />
      <InputApellidoSegundo />
    </div>
  );
}

function ApellidosInput() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="apellidos-input">
      <Frame24 />
      <Frame21 />
    </div>
  );
}

function SectionNombreApellido() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[569px]" data-name="section-nombre-apellido">
      <NombresInputs />
      <ApellidosInput />
    </div>
  );
}

function Frame4() {
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

function Frame7() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[70px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-px">
      <div aria-hidden="true" className="absolute border-black border-l border-solid inset-0 pointer-events-none" />
      <Frame4 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="h-[38px] relative shrink-0 w-[108px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[34.5px] not-italic text-[20px] text-black text-center top-[19.5px] w-[67px]">
          <p className="leading-[normal]">DNI</p>
        </div>
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TipoDocumentoSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[108px]" data-name="tipoDocumento-selector">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Tipo</p>
      <TextInput3 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">13.563.834</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNumDocumento() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-num-documento">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full"># Número de documento</p>
      <TextInput4 />
    </div>
  );
}

function InputsDocumento() {
  return (
    <div className="absolute content-stretch flex gap-[21px] items-center left-0 top-[39px] w-[569px]" data-name="inputs-documento">
      <TipoDocumentoSelector />
      <InputNumDocumento />
    </div>
  );
}

function IconDocumento() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icon-documento">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icon-documento">
          <path d={svgPaths.pf7a9e00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TitleDocumento() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-0 top-[-3px] w-[403px]" data-name="title-documento">
      <IconDocumento />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Documento*</p>
    </div>
  );
}

function InputNumeroDocumento() {
  return (
    <div className="h-[101px] relative shrink-0 w-[569px]" data-name="input-numero-documento">
      <InputsDocumento />
      <TitleDocumento />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3271a030} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TitleFechaNacimiento() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="title-fechaNacimiento">
      <Frame5 />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] min-h-px min-w-px not-italic relative text-[25px] text-black">Fecha de Nacimiento</p>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calendar-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar-icon">
          <path d={svgPaths.pd561870} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CalendarButton() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[235.5px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-0" data-name="calendar-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <CalendarIcon />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="h-[38px] relative shrink-0 w-[274px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Light_Italic',sans-serif] font-light h-[38px] italic justify-center leading-[0] left-[21px] text-[20px] text-black top-[19px] w-[167px]">
          <p className="leading-[normal]">01/01/1960</p>
        </div>
        <CalendarButton />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DateSelector() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="date-selector">
      <TextInput5 />
    </div>
  );
}

function InputFechaNacimiento() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[569px]" data-name="input-fecha-nacimiento">
      <TitleFechaNacimiento />
      <DateSelector />
    </div>
  );
}

function SectionDatosPersona() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0" data-name="section-datos-persona">
      <ToggleButtonGroup />
      <SectionNombreApellido />
      <InputNumeroDocumento />
      <InputFechaNacimiento />
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location-icon">
          <path d={svgPaths.pc200000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DomicilioTitle() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="domicilio-title">
      <LocationIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Domicilio Legal</p>
    </div>
  );
}

function Frame6() {
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

function Frame8() {
  return (
    <div className="absolute bg-[#d9d9d9] content-stretch flex items-start left-[169px] pb-[6px] pt-[8px] px-[7px] size-[38px] top-0">
      <div aria-hidden="true" className="absolute border-black border-l border-solid inset-0 pointer-events-none" />
      <Frame6 />
    </div>
  );
}

function TextInput6() {
  return (
    <div className="h-[38px] relative shrink-0 w-[207px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[76.5px] not-italic text-[20px] text-black text-center top-[19.5px] w-[151px]">
          <p className="leading-[normal]">Seleccionar</p>
        </div>
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ProvinciaSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-name="provincia-selector">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Provincia*</p>
      <TextInput6 />
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

function TextInput7() {
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

function LocalidadSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[212px]" data-name="localidad-selector">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Localidad*</p>
      <TextInput7 />
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

function InputNombreSegundo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Calle</p>
    </div>
  );
}

function TextInput8() {
  return (
    <div className="h-full relative shrink-0 w-[274px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput8 />
    </div>
  );
}

function NombreCalle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="nombre-calle">
      <InputNombreSegundo1 />
      <Text />
    </div>
  );
}

function InputNombreSegundo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Número</p>
    </div>
  );
}

function TextInput9() {
  return (
    <div className="h-full relative shrink-0 w-[114px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput9 />
    </div>
  );
}

function Numero() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="número">
      <InputNombreSegundo2 />
      <Text1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[19px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CheckNumero() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-start relative shrink-0 w-[142px]" data-name="check-numero?">
      <Frame31 />
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

function TextInput10() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombreSegundo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Código postal*</p>
      <TextInput10 />
    </div>
  );
}

function CodigoPostal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152px]" data-name="codigo-postal">
      <InputNombreSegundo3 />
    </div>
  );
}

function TextInput11() {
  return (
    <div className="h-[38px] relative shrink-0 w-[227px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function InputNombreSegundo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[227px]" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Barrio</p>
      <TextInput11 />
    </div>
  );
}

function BarrioInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="barrio-input">
      <InputNombreSegundo4 />
    </div>
  );
}

function InputNombreSegundo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[72px]">Piso</p>
    </div>
  );
}

function TextInput12() {
  return (
    <div className="h-full relative shrink-0 w-[68px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="text">
      <TextInput12 />
    </div>
  );
}

function PisoInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[68px]" data-name="piso-input">
      <InputNombreSegundo5 />
      <Text2 />
    </div>
  );
}

function InputNombreSegundo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="input-nombre-segundo">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Depto</p>
    </div>
  );
}

function TextInput13() {
  return (
    <div className="h-full relative shrink-0 w-[71px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[71px]" data-name="text">
      <TextInput13 />
    </div>
  );
}

function DeptoInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="depto-input">
      <InputNombreSegundo6 />
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

function CheckBox() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="check-box">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="check-box">
          <g clipPath="url(#clip0_1_1383)">
            <line id="Line 8" stroke="var(--stroke-0, black)" x1="-0.353553" x2="18.6464" y1="18.6464" y2="-0.353555" />
            <line id="Line 9" stroke="var(--stroke-0, black)" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 19 19)" x2="26.8701" y1="-0.5" y2="-0.5" />
          </g>
          <rect height="18" stroke="var(--stroke-0, black)" width="18" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1383">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CheckNumero1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-start relative shrink-0 w-[528px]" data-name="check-numero?">
      <CheckBox />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[19px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-[503px]">¿El domicilio legal es también el particular?</p>
    </div>
  );
}

function DomicilioSection() {
  return (
    <div className="h-[399px] relative shrink-0 w-full" data-name="domicilio-section">
      <div className="content-stretch flex flex-col gap-[18px] items-start p-[10px] relative size-full">
        <DomicilioTitle />
        <ProvinciaLocalidad />
        <Calle />
        <CodigoPostal />
        <Detalles />
        <CheckNumero1 />
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="phone-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="phone-icon">
          <path d={svgPaths.pb384280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TelefonosTitle() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full" data-name="telefonos-title">
      <PhoneIcon />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Teléfono/s</p>
    </div>
  );
}

function Telefono1Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="telefono1-title">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Teléfono #1</p>
    </div>
  );
}

function TextInput14() {
  return (
    <div className="h-full relative shrink-0 w-[274px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pa683700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DeleteButton() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]" data-name="delete-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame11 />
    </div>
  );
}

function Telefono1TextInput() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-center relative shrink-0" data-name="telefono1-text-input">
      <TextInput14 />
      <DeleteButton />
    </div>
  );
}

function Telefono1Input() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="telefono-1-input">
      <Telefono1Title />
      <Telefono1TextInput />
    </div>
  );
}

function Telefono2Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="telefono2-title">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Teléfono #2</p>
    </div>
  );
}

function TextInput15() {
  return (
    <div className="h-full relative shrink-0 w-[274px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pa683700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDeletePhoneNumbre() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]" data-name="button-delete-phone-numbre">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame12 />
    </div>
  );
}

function Frame13() {
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

function ButtonAddNewPhoneNumbre() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]" data-name="button-add-new-phone-numbre">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame13 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="buttons">
      <ButtonDeletePhoneNumbre />
      <ButtonAddNewPhoneNumbre />
    </div>
  );
}

function Telefono2TextInput() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-center relative shrink-0" data-name="telefono2-text-input">
      <TextInput15 />
      <Buttons />
    </div>
  );
}

function Telefono2Input() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="telefono2-input">
      <Telefono2Title />
      <Telefono2TextInput />
    </div>
  );
}

function TelefonosInput() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[569px]" data-name="telefonos-input">
      <TelefonosTitle />
      <Telefono1Input />
      <Telefono2Input />
    </div>
  );
}

function IconEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon-email">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon-email">
          <path d={svgPaths.p96d8300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <IconEmail />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Direccion/es e-mail</p>
    </div>
  );
}

function Correo1Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[274px]" data-name="correo1-title">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[24px] leading-[normal] not-italic relative shrink-0 text-[20px] text-black w-full">Correo #1</p>
    </div>
  );
}

function TextInput16() {
  return (
    <div className="h-full relative shrink-0 w-[274px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add-icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2a6e0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddButton() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]" data-name="add-button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <AddIcon />
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[38px] items-center relative shrink-0" data-name="input">
      <TextInput16 />
      <AddButton />
    </div>
  );
}

function InputCorreo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="input-correo1">
      <Correo1Title />
      <Input1 />
    </div>
  );
}

function DireccionesEmail1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="direcciones-email">
      <Frame22 />
      <InputCorreo />
    </div>
  );
}

function DireccionesEmail() {
  return (
    <div className="h-[114px] relative shrink-0 w-full" data-name="direcciones-email">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <DireccionesEmail1 />
      </div>
    </div>
  );
}

function SectionContacto() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-center relative shrink-0 w-full" data-name="section-contacto">
      <TelefonosInput />
      <DireccionesEmail />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1b5f6e00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function H3Inmuebles() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full" data-name="h3-inmuebles">
      <Frame14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Inmueble/s</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute left-[7px] size-[93px] top-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 93">
        <g id="Frame 67">
          <g clipPath="url(#clip0_1_1404)">
            <line id="Line 1" stroke="var(--stroke-0, black)" transform="matrix(-0.707277 -0.706937 0.699335 -0.714795 93 93)" x2="131.522" y1="-0.5" y2="-0.5" />
            <line id="Line 2" stroke="var(--stroke-0, black)" x1="0.635603" x2="92.6465" y1="91.6464" y2="-0.353576" />
          </g>
          <rect height="92" stroke="var(--stroke-0, black)" width="92" x="0.5" y="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1404">
            <rect fill="white" height="93" width="93" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-center left-[366.5px] p-[10px] top-[8px] w-[85px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black text-center whitespace-nowrap">
        <p className="leading-[normal]">En Alquiler</p>
      </div>
    </div>
  );
}

function TextInput17() {
  return (
    <div className="h-[109px] relative shrink-0 w-[459px]" data-name="text-input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame26 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[107.5px] not-italic text-[25px] text-black top-[27px] w-[280px]">Av. siempre viva, 500</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[309.5px] not-italic text-[20px] text-black top-[79px] w-[172px]">$ 500.000 ARS</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[107.5px] not-italic text-[15px] text-black top-[57px] w-[280px]">Departamento</p>
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pa683700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame16 />
    </div>
  );
}

function Frame18() {
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

function Frame17() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-start pb-[6px] pt-[8px] px-[7px] relative shrink-0 size-[38px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame18 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[6px] items-center left-1/2 top-1/2">
      <Frame15 />
      <Frame17 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[110px] overflow-clip relative shrink-0 w-[98px]">
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[6px] items-start justify-center relative shrink-0 w-full">
      <TextInput17 />
      <Frame29 />
    </div>
  );
}

function ListInmuebles() {
  return (
    <div className="content-stretch flex flex-col h-[156px] items-center relative shrink-0 w-full" data-name="list-inmuebles">
      <Frame28 />
    </div>
  );
}

function Inmuebles() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[198px] items-start relative shrink-0 w-full" data-name="inmuebles">
      <H3Inmuebles />
      <ListInmuebles />
    </div>
  );
}

function SeccionInmuebles() {
  return (
    <div className="h-[161px] relative shrink-0 w-full" data-name="sección-inmuebles">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <Inmuebles />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p15370a00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <Frame19 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] not-italic relative shrink-0 text-[25px] text-black w-[538px]">Observaciones</p>
    </div>
  );
}

function TextInput18() {
  return (
    <div className="h-[80px] relative shrink-0 w-[400px]" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[89px] items-center relative shrink-0">
      <TextInput18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function NombresInputs1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="nombres-inputs">
      <Frame23 />
      <Frame20 />
    </div>
  );
}

function ObservacionesSection() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="observaciones-section">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <NombresInputs1 />
      </div>
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[52px] items-center left-[calc(50%-0.5px)] top-[107px] w-[588px]" data-name="form-frame">
      <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
            <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SectionDatosPersona />
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
      <SectionContacto />
      <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
            <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SeccionInmuebles />
      <div className="h-0 relative shrink-0 w-[566px]" data-name="section-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 566 1">
            <line id="section-divider" stroke="var(--stroke-0, black)" x2="566" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ObservacionesSection />
      <FormButtons />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[57px]" data-name="icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
        <g id="icon">
          <path d={svgPaths.p3b335200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function H2Title() {
  return (
    <div className="absolute content-stretch flex items-center left-[40px] top-[20px]" data-name="h2-title">
      <Icon />
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[34px] leading-[normal] not-italic relative shrink-0 text-[35px] text-black w-[348px]">
        <p className="mb-0">Nuevo Propietario</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[950px] left-[96px] overflow-clip top-[74px] w-[1344px]" data-name="main">
      <H1Title />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[normal] left-[16px] not-italic text-[15px] text-black top-[58px] w-[297px]">Propietarios / Nuevo propietario</p>
      <GoBackButton />
      <div className="absolute bg-white border border-black border-solid h-[2443px] left-[380px] overflow-clip top-[90px] w-[679px]" data-name="from-new-propietario">
        <FormFrame />
        <H2Title />
      </div>
    </div>
  );
}

export default function NuevoPropietario() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Nuevo Propietario">
      <Navbar />
      <SideNavbar />
      <Main />
    </div>
  );
}