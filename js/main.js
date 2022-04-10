const tooltip = document.querySelector('.tooltip')
const rooms = document.querySelectorAll('.room')
const popupBg = document.querySelector('.info__bg')
const popup = document.querySelector('.info')

rooms.forEach(room => {
    room.addEventListener("click", function() {
        popup.querySelector('.info__photo').setAttribute('src',this.dataset.photo)
        popup.querySelector('.info__title').innerText = this.dataset.title
        popup.querySelector('.info__description').innerText = this.dataset.description
        popupBg.classList.add('active')
    })
    
    room.addEventListener("mousemove",function(event) {
        tooltip.innerText = this.dataset.title
        tooltip.style.top = (event.y + 20) + 'px' 
        tooltip.style.left = (event.x + 20) + 'px' 
    })
    
    room.addEventListener("mouseenter",() => {
        tooltip.style.display = "block"
    })
    
    room.addEventListener("mouseleave",() => {
        tooltip.style.display = "none"
    })
})

document.addEventListener('click',(event) => {
    if(event.target === popupBg) {
        popupBg.classList.remove('active')
    }
})