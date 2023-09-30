const eeiaCssStyle = `

    .eeia-parentDiv {
        position: fixed; bottom: 15px; right: 15px;z-index: 10000;
    }
    .eeia-button {
        width: 50px; aspect-ratio:1; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #000; font-size: 12px; font-weight: bold; cursor: pointer; border: none; background-color: chartreuse; box-shadow: 0px 1px 15px 4px #0000002b;float: right;
    }

    .eeia-parentDiv .eeia-chat-card.show-card svg {
        animation: growIcon 500ms forwards;
        animation-delay: 1000ms;
    }

    .eeia-button > svg {
        animation: growIcon 500ms forwards;
    }

    @keyframes growIcon {
        from {scale: 0.5;}
        to {scale: 1;}
    }

    .eeia-button:hover {
        background-color: #65c507;
        box-shadow: 0px 1px 15px 4px #0000005c;
        transition: all 100ms linear;
    }

    .eeia-chat-card {
        background-color: rgb(226, 229, 229);
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 5px;
        opacity: 0;
        height: 0;
        width: 0;
        position: relative;
        transform: translateY(50px);
        transition: all 1000ms ease-in-out;
    }

    .eeia-chat-card.show-card {
        opacity: 1;
        height: auto;
        width: 25vw;
        min-width: 300px;
        max-width: 400px;
        transform: translateY(0);
        transition: all 1000ms ease-in-out;
    }

    .eeia-chat-header, .eeia-chat-body {
        padding: 10px;
        position: relative;
    }

    .eeia-chat-header {
        background-color: chartreuse;
    }

    .eeia-chat-header .eeia-adminData {
        display: flex;
        align-items: center;
    }
    .eeia-chat-header .adminIcon {
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .eeia-chat-header .adminIcon svg {
        width: 30px;
        height: 30px;
    }
    .eeia-chat-header .adminName {
        padding: 0 10px
    }
    .eeia-chat-header .adminName h4 {
        text-align: center;
        font-size: 1.2rem !important;
        margin: 0;
    }
    .eeia-chat-header .adminName p {
        font-size: 0.7rem !important;
        margin: 0;
    }

    .eeia-chats-messages {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        max-height: 300px;
        overflow-y: auto;
        margin-bottom: 10px;
    }


    .eeia-chats-messages::-webkit-scrollbar {
        width: 0.5em;
    }
    
    .eeia-chats-messages::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    .eeia-chats-messages::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }

    .eeia-chats-messages .eeia-user-message,
    .eeia-chats-messages .eeia-admin-message {
        max-width: 80%;
        border-radius: 9px;
        padding: 5px 10px;
        font-size: 0.9rem;
        margin-bottom: 5px;
    }

    .eeia-chats-messages .eeia-user-message {
        margin-left: auto;
        background-color: #a6e0a8;
        border-bottom-right-radius: 0;
    }
    .eeia-chats-messages .eeia-admin-message {
        margin-right: auto;
        background-color: #c8cac8;
        border-bottom-left-radius: 0;
    }

    .eeia-send-section {
        display: flex;
        width: 100%;
        border-radius: 7px;
        border: 1px solid #fff;
        overflow: hidden;
        align-items: center;
        background-color: #fff;
    }

    .eeia-send-section input {
        width: 100%;
        border: none;
        padding: 0px 15px;
        height: 40px;
    }

    .eeia-send-section input:focus {
        outline: none;
        background-color: rgb(244 251 251);
    }

    .eeia-send-section > button {
        height: 40px;
        width: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* border-radius: 25px; */
        border: none;
        background-color: #a6e0a8;
        cursor: pointer;
    }

    .eeia-send-section > button:hover {
        background-color: #8dbd8f;
    }

    .eeiaChatActions {
        position: absolute;
        top: 8px;
        right: 10px;
        z-index: 5;
        display: flex;
        gap: 10px;
    }

    .eeiaChatActions .eeia-dropDown {
        position: relative;
        background-color: transparent;
    }

    .eeiaChatActions .eeia-dropDown .eeiaDropDownLabel1 {
        height: 20px;
        width: 20px;
        background-color: transparent;
        display: block;
        cursor: pointer;
    }

    .eeiaChatActions .eeia-dropDown .eeiaDropDownLabel2 {
        z-index: 0;
    }

    .eeiaChatActions .eeia-dropdown-open:checked ~ .eeiaDropDownLabel2 {
        z-index: 4;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .eeiaChatActions .eeiaDropdownInner {
        opacity: 0;
        visibility: hidden;
        z-index: 0;
    }

    .eeiaChatActions .eeia-dropdown-open:checked ~ .eeiaDropdownInner {
        opacity: 100;
        visibility: visible;
        z-index: 5;
    }

    .eeiaChatActions .eeiaDropdownInner ul.nav-list {
        list-style-type: none;
        background-color: #fff;
        position: absolute;
        right: 5px;
        top: 25px;
        width: 100px;
        padding: 0;
    }
    
    .eeiaChatActions .eeiaDropdownInner ul.nav-list li a {
        color: #000;
        padding: 5px;
        text-decoration: none;
        width: 100%;
        display: block;
    }
    
    .eeiaChatActions .eeiaDropdownInner ul.nav-list li a:hover {
        background-color: #f1f1f1;
    }


    .eeiaChatActions .eeia-mini {
        border: none;
        background-color: transparent;
        height: 20px;
        cursor: pointer;
    }
`

const eeiaDataObjects = {
    'ChatButton' : {
        'iconChat' : `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9H16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M8 12.5H13.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM1.25 10.5C1.25 10.9142 1.58579 11.25 2 11.25C2.41421 11.25 2.75 10.9142 2.75 10.5H1.25ZM3.07351 15.6264C2.915 15.2437 2.47627 15.062 2.09359 15.2205C1.71091 15.379 1.52918 15.8177 1.68769 16.2004L3.07351 15.6264ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#1C274C"/>
        </svg>`,
        'iconClose' : `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`
    },
    'SendButton': {
        'before' : `<?xml version="1.0" encoding="utf-8"?>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    'userIcon': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`,

    'menuIcon' : `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`,

    'crossIcon' : `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>`
}


const conversationMessages = [
    {
        'userType' : 'user',
        'message' : 'Who are you?'
    },
    {
        'userType' : 'admin',
        'message' : 'Welcome to EEIA!'
    },
    {
        'userType' : 'user',
        'message' : 'Who are you?'
    }
]

function capitalizeFirstLetter(input) {
    // Get the current value of the input
    let inputValue = input.value;
  
    // Ensure that the input has a value and it's not empty
    if (inputValue && inputValue.length > 0) {
      // Capitalize the first letter and keep the rest of the string in lowercase
      inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
  
      // Update the input value with the capitalized result
      input.value = inputValue;
    }
  }
  
document.addEventListener("DOMContentLoaded", (event) => {
    const bodyTag = document.getElementsByTagName("body")[0];
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute('id', 'eeia-popup-area');
    parentDiv.setAttribute('class', 'eeia-parentDiv');
    bodyTag.appendChild(parentDiv);

    let eeiaPopUpIsOpen = false;

    if(localStorage.getItem('eeiapopup') === 'true') {
        localStorage.setItem('eeiapopup', 'true');
        eeiaPopUpIsOpen = true;
    } else {
        localStorage.setItem('eeiapopup', 'false');
    }

    // Main Card Element
    const chatCard = document.createElement("div");
    if(eeiaPopUpIsOpen) {
        chatCard.setAttribute('class', 'eeia-chat-card show-card');
    } else {
        chatCard.setAttribute('class', 'eeia-chat-card');
    }
    chatCard.setAttribute('id', 'eeiaChatCard');

    // Card Header Element
    const chatCardHeader = document.createElement("div");
    chatCardHeader.setAttribute('class', 'eeia-chat-header');
    chatCardHeader.setAttribute('id', 'eeiaChatHeader');
    chatCardHeader.innerHTML = `
    <div class="eeia-adminData">
        <div class="adminIcon">
            ${eeiaDataObjects.userIcon}
        </div>
        <div class="adminName">
            <h4>Name</h4>
            <p>Position</p>
        </div>
    </div>
    `;


    const chatActionBtnSections = document.createElement("div");
    chatActionBtnSections.setAttribute('class', 'eeiaChatActions');

    const dropDownAction = document.createElement("div");
    dropDownAction.classList = "eeia-dropDown";
    chatActionBtnSections.appendChild(dropDownAction);

    const miniBtn = document.createElement("button");
    miniBtn.classList = "eeia-mini";
    miniBtn.innerHTML = eeiaDataObjects.crossIcon;
    chatActionBtnSections.appendChild(miniBtn);

    const iconLabel = document.createElement("label");
    iconLabel.setAttribute('for', 'eeiaDropDown');
    iconLabel.setAttribute('class', 'eeiaDropDownLabel1');
    iconLabel.innerHTML = eeiaDataObjects.menuIcon;
    dropDownAction.appendChild(iconLabel);

    const CheckboxToOpenDropDown = document.createElement("input");
    CheckboxToOpenDropDown.setAttribute('type', 'checkbox');
    CheckboxToOpenDropDown.setAttribute('class', 'eeia-dropdown-open');
    CheckboxToOpenDropDown.setAttribute('id', 'eeiaDropDown');
    CheckboxToOpenDropDown.setAttribute('aria-hidden', 'true');
    CheckboxToOpenDropDown.setAttribute('hidden', 'true');
    dropDownAction.appendChild(CheckboxToOpenDropDown);

    const iconLabelHide = document.createElement("label");
    iconLabelHide.setAttribute('for', 'eeiaDropDown');
    iconLabelHide.setAttribute('class', 'eeiaDropDownLabel2');
    dropDownAction.appendChild(iconLabelHide);

    const dropdownInner = document.createElement("div");
    dropdownInner.classList = 'eeiaDropdownInner';
    dropdownInner.innerHTML = `<ul class="nav-list">
        <li><a class="btn" href="#">Option A</a></li>
        <li><a class="btn" href="#">Option B</a></li>
    </ul>`
    dropDownAction.appendChild(dropdownInner);


    // Card Body Header Element
    const chatCardBody = document.createElement("div");
    chatCardBody.setAttribute('class', 'eeia-chat-body');
    chatCardBody.setAttribute('id', 'eeiaChatBody');
    
    //  Chats Messages Element
    const chatMessages = document.createElement('div');
    chatMessages.setAttribute('class', 'eeia-chats-messages');
    chatMessages.setAttribute('id', 'eeiaChatMessages');

    function UpdateMessageSection() {
        conversationMessages.forEach(chatMessage => {
            const chatMessageBody = document.createElement("div");
            chatMessageBody.className = chatMessage.userType === 'user' ? 'eeia-user-message' : 'eeia-admin-message';
            chatMessageBody.innerText = chatMessage.message;
            chatMessages.appendChild(chatMessageBody);
        })
    }


    //  Send section parent Element
    const chatSend = document.createElement('div');
    chatSend.setAttribute('class', 'eeia-send-section');
    chatSend.setAttribute('id', 'eeiaSendSection');

    function getTextAndSend() {
        if(chatInputbox.value.trim().length > 0) {
            conversationMessages.push({'userType': 'user', 'message': chatInputbox.value});
            chatMessages.innerHTML = ``;
            UpdateMessageSection();
            chatInputbox.value = '';
        }
    }

    //  Input Element for text message
    const chatInputbox = document.createElement('input');
    chatInputbox.setAttribute('type', 'text');
    chatInputbox.setAttribute('placeholder', 'Type here...');
    chatInputbox.setAttribute('id', 'eeiaInput');
    chatInputbox.addEventListener('input', function () {
        capitalizeFirstLetter(this);
    })
    chatInputbox.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            console.log(event);
            getTextAndSend();
        }
    });
    
    
    
    //  Button Element for send message
    const chatSendButton = document.createElement('button');
    chatSendButton.setAttribute('type', 'button');
    chatSendButton.setAttribute('class', 'eeia-send-btn');
    chatSendButton.setAttribute('id', 'eeiaSendBtn');
    chatSendButton.innerHTML = eeiaDataObjects.SendButton.before;
    chatSendButton.addEventListener('click', getTextAndSend);

    function showHidePopup () {
        const chatPopup = document.getElementById('eeiaChatCard');
        chatPopup.classList.toggle('show-card');
        const chatPopupBtn = document.getElementById('eeia-chat-pop-up-button')
        if(!eeiaPopUpIsOpen) {
            chatPopupBtn.innerHTML = eeiaDataObjects.ChatButton.iconClose;
            eeiaPopUpIsOpen = true;
            localStorage.setItem('eeiapopup', 'true');
        } else {
            chatPopupBtn.innerHTML = eeiaDataObjects.ChatButton.iconChat;
            eeiaPopUpIsOpen = false;
            localStorage.setItem('eeiapopup', 'false');
        }
        CheckboxToOpenDropDown.checked = false;
    }

    function createChatCardPopup () {

        chatCard.appendChild(chatCardHeader);

        chatCard.appendChild(chatActionBtnSections);

        chatCard.appendChild(chatCardBody);

        chatCardBody.appendChild(chatMessages);

        chatSend.appendChild(chatInputbox);

        chatSend.appendChild(chatSendButton);

        chatCardBody.appendChild(chatSend);

        parentDiv.appendChild(chatCard);
        miniBtn.addEventListener('click', showHidePopup)
    }


    function createPopUpButton () {
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = eeiaPopUpIsOpen ? eeiaDataObjects.ChatButton.iconClose : eeiaDataObjects.ChatButton.iconChat;
        buttonElement.setAttribute('id', 'eeia-chat-pop-up-button');
        buttonElement.setAttribute('class', 'eeia-button');
        buttonElement.addEventListener('click', showHidePopup);
        parentDiv.appendChild(buttonElement)
    }

    if(parentDiv) {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = eeiaCssStyle;
        parentDiv.appendChild(styleElement);
        createChatCardPopup();
        createPopUpButton();
        UpdateMessageSection();
    }
});