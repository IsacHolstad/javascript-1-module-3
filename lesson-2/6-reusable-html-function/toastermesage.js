function createToaster(type = " ", message = "") {
    return  `<div class="toaster ${type}">
    <span>${type}</span>
    <span>${message}</span>
    </div>`;

};


//testing stuff from instagram
for (let i=0; i<5; i++) {
    if(i === 0)
    continue
    console.log(i)
};