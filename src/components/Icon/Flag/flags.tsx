import React from 'react'

const circle = (cx,cy,r) => (props) => <circle cx={cx} cy={cy} r={r} {...props} />

export default {
    bangladesh: ['M0 85.331h512v341.337H0z', circle(218.902, 255.994, 74.207)],
    china: [
        'M0 85.331h512v341.337H0z',
        'M178.923 189.567l14.656 45.107h47.429l-38.371 27.878 14.657 45.109-38.371-27.879-38.371 27.879 14.656-45.109-38.371-27.878h47.429zM271.3 339.593l-14.39-10.455-14.388 10.454 5.495-16.914-14.389-10.455h17.786l5.496-16.916 5.498 16.916h17.785l-14.389 10.454zM308.837 287.927h-17.785l-5.496 16.914-5.496-16.913-17.787-.001 14.391-10.455-5.498-16.915 14.39 10.453 14.389-10.453-5.496 16.915zM308.837 224.063l-14.388 10.455 5.495 16.914-14.388-10.453-14.39 10.455 5.498-16.917-14.391-10.452 17.788-.002 5.495-16.916 5.496 16.916zM271.3 172.397l-5.495 16.916 14.388 10.453-17.785.001-5.498 16.917-5.496-16.918-17.785.002 14.389-10.456-5.496-16.916 14.388 10.455z',
    ],
    egypt: [
        'M0 85.337h512v341.326H0z',
        'M0 85.337h512v113.775H0z',
        'M0 312.888h512v113.775H0z',
        'M320 236.29h-48c0-8.836-7.164-16-16-16s-16 7.164-16 16h-48c0 8.836 7.697 16 16.533 16H208c0 8.836 7.164 16 16 16 0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16 8.836 0 16-7.164 16-16h-.533c8.836 0 16.533-7.163 16.533-16z',
    ],
    france: [
        'M0 85.331h512v341.337H0z',
        'M0 85.331h170.663v341.337H0z',
        'M341.337 85.331H512v341.337H341.337z',
    ],
    germany: [
        'M0 85.331h512v341.337H0z',
        'M0 85.331h512v113.775H0z',
        'M0 312.882h512v113.775H0z',
    ],
    greece: [
        'M0 60.338h362.023v241.346H0z',
        'M0 60.338h362.023v30.168H0zM0 120.679h362.023v30.168H0zM0 181.014h362.023v30.168H0zM0 241.35h362.023v30.168H0z',
        'M0 60.338h133.788v120.676H0z',
        'M0 107.27h133.788v26.814H0z',
        'M53.487 60.338h26.814v120.676H53.487z',
    ],
    india: [
        'M0 85.337h512v341.326H0z',
        'M0 85.337h512v113.775H0z',
        'M0 312.888h512v113.775H0z',
        circle(256, 256, 43.896),
        circle(256, 256, 27.434),
        'M256 222.146l8.464 19.195 20.855-2.268L272.927 256l12.392 16.927-20.855-2.268L256 289.854l-8.464-19.195-20.855 2.268L239.073 256l-12.392-16.927 20.855 2.268z',
    ],
    ireland: [
        'M0 85.331h512v341.326H0z',
        'M0 85.331h170.663v341.337H0z',
        'M341.337 85.331H512v341.337H341.337z',
    ],
    italy: [
        'M341.334 85.33H0v341.332h512V85.33z',
        'M0 85.333h170.663V426.67H0z',
        'M341.337 85.333H512V426.67H341.337z',
    ],
    japan: ['M0 85.331h512v341.337H0z', circle(256, 255.94, 96)],
    poland: [
        'M0 85.337h512v341.326H0z',
        'M0 85.337h512V256H0z',
        'M0 256h512v170.663H0z',
    ],
    portugal: [
        'M0 85.337h512v341.326H0z',
        'M196.641 85.337v341.326H0V85.337z',
        circle(196.641, 256, 64),
        'M160.638 224v40.001c0 19.882 16.118 36 36 36s36-16.118 36-36V224h-72z',
        'M196.638 276c-6.617 0-12-5.383-12-12v-16h24.001v16c-.001 6.616-5.385 12-12.001 12z',
    ],
    russia: [
        'M0 85.33v341.332h512V85.33z',
        'M0 85.333h512V426.67H0z',
        'M0 85.333h512v113.775H0z',
        'M0 312.884h512v113.775H0z',
    ],
    spain: [
        'M0 85.331h512v341.337H0z',
        'M0 85.331h512v113.775H0zM0 312.882h512v113.775H0z',
    ],
    sweden: [
        'M0 85.333h512V426.67H0z',
        'M192 85.33h-64v138.666H0v64h128v138.666h64V287.996h320v-64H192z',
    ],
    uk: [
        'M0 85.333h512V426.67H0z',
        'M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z',
        'M393.785 315.358L512 381.034v-65.676zM311.652 315.358L512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z',
        'M311.652 315.358L512 426.662v-31.474l-143.693-79.83z',
        'M311.652 315.358L512 426.662v-31.474l-143.693-79.83z',
        'M90.341 315.356L0 365.546v-50.19zM200.348 329.51v97.151H25.491z',
        'M143.693 315.358L0 395.188v31.474l200.348-111.304z',
        'M118.215 196.634L0 130.958v65.676zM200.348 196.634L0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z',
        'M200.348 196.634L0 85.33v31.474l143.693 79.83z',
        'M200.348 196.634L0 85.33v31.474l143.693 79.83z',
        'M421.659 196.636L512 146.446v50.19zM311.652 182.482V85.331h174.857z',
        'M368.307 196.634L512 116.804V85.33L311.652 196.634z',
    ],
    usa: [
        'M0 85.331h512v341.337H0z',
        'M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z',
        'M0 85.331h256v183.797H0z',
        'M99.822 160.624l-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z',
    ],
}
