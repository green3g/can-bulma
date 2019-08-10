import view from './files.stache';
import Component from 'can-component';
import '../sp-file-list';

export default Component.extend({
    tag: 'sp-file-demo',
    viewModel: {
        simulateUpload([file]){
            file.progress = 0;
            const interval = Math.round(Math.random() * 10) || 1;
            const timer = window.setInterval(() => {
                file.progress += interval;
                if(file.progress > 99){
                    window.clearInterval(timer);
                    // randomly generate an error
                    if(interval > 8){
                        file.error = "A fake error occurred during the file upload. Please try again later."
                    }
                }
            }, 100);
        }
    },
    view,
})