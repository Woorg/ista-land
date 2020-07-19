
/*
    Lazyload images
*/

let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    // load_delay: 500,
    use_native: true
});


if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

