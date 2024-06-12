const MainFirst = class MainFirst {
    constructor(){}
    videoInit() {
        document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.play-button').forEach(function(button) {
            button.addEventListener('click', function() {
                var preview = this.closest('.video-preview')
                var container = preview.nextElementSibling
                var youtubeUrl = preview.getAttribute('data-youtube-url')
                preview.style.display = 'none'
                container.style.display = 'block'
                var iframe = container.querySelector('.youtube-video')
    
                iframe.src = youtubeUrl + '&autoplay=1'
            })
        })
    })
    }
    init() {
        this.videoInit();
    }
}

export default MainFirst;