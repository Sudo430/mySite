let activeTab = {
    innterStr: "About Me",
    id: "about"
}

const tabContent = {
    about: "<p>Hello there, My name is Tyler. I'm currently working on a degree in software development at BYUI Online. I like building and flying drones, messing around with computers, and the great outdoors.</p>",
    work:"<p>Currently, the only project I have to show off is this site. The code is on my <a href='https://github.com/Sudo430'>GitHub</a>, along with some coursework.</p>",
    fpv:"<p>I'll put some stuff about my FPV(First Person View) drones here someday. It might need to be a separate page.</p>",
    contact:"<p>I will put a way to contact me here in the future. I'm not sure how I feel about putting my email on a public site.</p>"
};



function switchTab(tab){
    //update the content
    document.querySelector("#content").innerHTML = tabContent[tab];

    //update buttons
    document.querySelector(`#${activeTab.id}`).innerHTML = activeTab.innterStr;
    const button = document.querySelector(`#${tab}`);
    activeTab.innterStr = button.innerHTML;
    button.innerHTML = `<strong>>${button.innerHTML}<</strong>`;
    activeTab.id = button.getAttribute("id");

}

switchTab(activeTab.id);