const StajBlock = class StajBlock {
    constructor(){}
    viewInit() {
        document.addEventListener('DOMContentLoaded', function() {
            const views = document.querySelectorAll('.staj_block__view');
            const contents = document.querySelectorAll('.staj_block__content');

            views.forEach((view, index) => {
                view.addEventListener('click', () => {
                    // Remove isActive from all views and contents
                    views.forEach(v => v.classList.remove('isActive'));
                    contents.forEach(c => c.classList.remove('isActive'));

                    // Add isActive to the clicked view and corresponding content
                    view.classList.add('isActive');
                    contents[index].classList.add('isActive');
                });
            });
        });
    }
    init() {
        this.viewInit();
    }
}

export default StajBlock;