function todo (task) {
    setTimeout (function fun() {
        console.log(task);
    }, 5000) ;
}

todo("assignment") ;