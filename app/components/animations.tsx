export const frombotttomtotop = {
    initial:{opacity:0, y:30},
    animate:{opacity:1, y:0},
    whileInView:{opacity:1, y:0},
    viewport:{once:true},
    transition:{ duration:0.7,
    ease:"easeInOut"}
}

export const fromtoptobottom = {
    initial:{opacity:0, y:-30},
    animate:{opacity:1, y:0},
    whileInView:{opacity:1, y:0},
    viewport:{once:true},
    transition:{ duration:0.7,
    ease:"easeInOut"}
}

export const fromlefttoright = {
    initial:{opacity:0, x:-30},
    animate:{opacity:1, x:0},
    whileInView:{opacity:1, x:0},
    viewport:{once:true},
    transition:{ duration:0.7,
    ease:"easeInOut"}
}

export const fromrighttoleft = {
    initial:{opacity:0, x:30},
    animate:{opacity:1, x:0},
    whileInView:{opacity:1, x:0},
    viewport:{once:true},
    transition:{ duration:0.7,
    ease:"easeInOut"}
}

