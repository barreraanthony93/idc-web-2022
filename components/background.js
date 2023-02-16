import React, { useEffect } from 'react'

function background() {

    useEffect(() => {
        const rand = (min, max) => Math.random() * (max - min) + min;
        const randInt = (min, max) => (Math.random() * (max - min) + min).toFixed(0);
        const randomBlobs = [
            "M48.8,-70.2C60.5,-58.7,65.4,-40.8,63.8,-25.5C62.1,-10.3,53.8,2.3,51.6,19.2C49.4,36.1,53.3,57.3,45.7,68.8C38.1,80.2,19,81.8,1.1,80.3C-16.9,78.8,-33.8,74.3,-38,61.8C-42.3,49.3,-33.9,28.8,-36.1,13.7C-38.4,-1.4,-51.1,-11.1,-49.9,-16.6C-48.6,-22.1,-33.3,-23.4,-22.6,-35.3C-12,-47.1,-6,-69.5,6.3,-78.1C18.5,-86.8,37.1,-81.7,48.8,-70.2Z",
            "M26.1,-34.4C33.3,-30.8,38,-22.3,46.9,-11.3C55.9,-0.3,69.2,13.3,64.8,19.3C60.4,25.3,38.3,23.8,24.6,30.4C10.8,37,5.4,51.6,-6.4,60.5C-18.3,69.3,-36.6,72.4,-43.2,63.5C-49.9,54.7,-44.9,33.8,-50.6,16.4C-56.4,-1,-72.9,-15,-72.2,-25.5C-71.6,-35.9,-53.8,-42.8,-38.9,-43.8C-24.1,-44.9,-12,-40.1,-1.3,-38.4C9.5,-36.6,19,-38,26.1,-34.4Z",
            "M46.7,-61.9C56.9,-56.8,59.2,-38.4,60.3,-22.5C61.4,-6.7,61.4,6.6,55.6,16.1C49.8,25.6,38.4,31.3,28.1,35.8C17.9,40.4,9,43.8,-0.3,44.2C-9.6,44.6,-19.1,42.1,-28.4,37.2C-37.8,32.4,-46.8,25.3,-52.5,15.3C-58.2,5.3,-60.6,-7.6,-59.7,-22.1C-58.7,-36.7,-54.4,-52.8,-43.9,-57.8C-33.4,-62.8,-16.7,-56.6,0.7,-57.7C18.2,-58.7,36.4,-66.9,46.7,-61.9Z",
            "M30.9,-37.2C40.5,-35.6,48.9,-27.1,58.3,-15C67.6,-2.9,77.9,12.9,72.6,21.9C67.4,31,46.7,33.4,32,43.4C17.3,53.5,8.7,71.2,-5.4,78.6C-19.5,86.1,-39,83.3,-43.1,69.8C-47.3,56.4,-36.1,32.2,-40.6,14.2C-45.1,-3.8,-65.2,-15.8,-68.8,-27.9C-72.5,-39.9,-59.6,-52.2,-45.4,-52.3C-31.2,-52.3,-15.6,-40.3,-2.5,-36.9C10.7,-33.5,21.3,-38.7,30.9,-37.2Z",
            "M43.7,-56.7C55.1,-51.9,61.9,-37.1,61.9,-23.3C62,-9.6,55.4,3.1,52.4,18.5C49.4,33.8,50,51.7,41.9,55.5C33.7,59.3,16.9,48.9,3.8,43.7C-9.3,38.4,-18.6,38.4,-23.3,33.5C-28.1,28.7,-28.4,19,-38.9,7.6C-49.5,-3.7,-70.3,-16.7,-75,-31.2C-79.7,-45.8,-68.3,-62,-53.1,-65.7C-37.9,-69.3,-18.9,-60.4,-1.4,-58.5C16.1,-56.6,32.3,-61.6,43.7,-56.7Z",
            "M30.8,-48.8C39.5,-36.1,45.9,-26.5,51.5,-15.3C57.2,-4,62.2,8.9,56,15.1C49.7,21.4,32.3,21,21.1,21.2C10,21.5,5,22.4,-5.8,30.3C-16.5,38.3,-33.1,53.3,-46.6,53.8C-60.2,54.3,-70.7,40.4,-74.3,25.1C-77.8,9.9,-74.3,-6.6,-63.4,-14.6C-52.5,-22.5,-34.1,-22.1,-22.3,-33.7C-10.5,-45.4,-5.2,-69.2,2.9,-73.2C11.1,-77.3,22.1,-61.5,30.8,-48.8Z",
            "M38.9,-55.9C50.1,-45.4,58.6,-33.6,67.2,-19.1C75.8,-4.5,84.3,12.9,77.5,22.4C70.6,32,48.2,33.8,32.7,43.2C17.2,52.7,8.6,69.7,-1.4,71.6C-11.3,73.4,-22.7,60.1,-37.5,50.5C-52.3,40.8,-70.7,34.9,-75.8,23.6C-81,12.2,-73,-4.4,-65,-18.7C-57,-32.9,-49,-44.7,-38.2,-55.3C-27.4,-65.9,-13.7,-75.3,0.1,-75.5C13.9,-75.6,27.7,-66.4,38.9,-55.9Z",
            "M38.2,-57.4C45.7,-47.2,45.1,-30.9,50.9,-15.9C56.7,-0.9,68.9,12.7,63.6,18C58.3,23.3,35.4,20.3,21.9,23.1C8.4,25.8,4.2,34.4,-2.6,37.9C-9.3,41.4,-18.6,39.9,-30.4,36.6C-42.2,33.3,-56.5,28.1,-57.9,19.8C-59.2,11.4,-47.7,-0.2,-40.5,-10.3C-33.3,-20.5,-30.4,-29.2,-24.4,-39.9C-18.4,-50.5,-9.2,-63.1,3.1,-67.4C15.4,-71.7,30.8,-67.6,38.2,-57.4Z"
        ]

        const swirls = document.querySelectorAll(".swirl");
        const container = document.querySelector("#gradient");

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 200 200")
        svg.setAttribute('width', '600');
        svg.setAttribute('height', '250');
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("id", "svg-path")
        path.setAttribute("fill", "#FF0066");
        path.setAttribute("d", randomBlobs[randInt(0, randomBlobs.length)]); 
        path.setAttribute("transform", "translate(100 100)")
        svg.appendChild(path);
        container.appendChild(svg) 

        // for (var i = 0; i <= 4; i++) {
        //     let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); 
        //     svg.setAttribute("viewBox", "0 0 200 200")
        //     svg.setAttribute("xmlns", "http://www.w3.org/2000/svg") 
        // let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        //     path.setAttribute("fill", "#FF0066");
        //     path.setAttribute("d",
        //         "M34.8,-47.4C40.3,-43.9,36.7,-27.3,35.7,-15.2C34.8,-3,36.5,4.7,36.3,13.8C36.2,23,34.1,33.5,27.7,41.8C21.3,50,10.7,56,-3.3,60.6C-17.4,65.2,-34.7,68.4,-49.9,63.1C-65.1,57.7,-78.2,43.7,-76.9,29.3C-75.7,14.9,-60.2,0.2,-54.1,-17.3C-48,-34.7,-51.3,-54.9,-43.9,-57.7C-36.4,-60.6,-18.2,-46,-1.8,-43.5C14.7,-41.1,29.3,-50.8,34.8,-47.4Z");
        //     path.setAttribute("transform", "translate(100 100)")
        //     svg.appendChild(path);
        //     container.append(svg)

        // }
        // function randomize() {

        //     swirls.forEach((swirl, i) => {
        //         const hue = rand(20, 160);
        //         const sat = rand(20, 50);
        //         const lightness = rand(20, 70);
        //         const blur = rand(100, 100);
        //         const width = window.innerWidth
        //         const height = window.innerHeight
        //         swirl.style.transform = `scale(${rand(1, 1.5)}) translate(${rand(0, 50) * i}%, ${rand(0, 85) * i}%)`;
        //         swirl.style.width = rand(width / 2, width) + "px";
        //         swirl.style.borderRadius =
        //             swirl.style.height = rand(height / 2, height) + "px";
        //         swirl.style.background = `rgba(${rand(10, 150)}, ${rand(10, 150)}, ${rand(10, 150)}, ${rand(.5, 1)})`;
        //     });
        // }

        randomize();
        function randomize() { 
            let svgPath = document.getElementById('svg-path')
            svgPath.setAttribute("d", randomBlobs[randInt(0, randomBlobs.length - 1)])
            svg.setAttribute("transform", `scale(${rand(2, 4)})`)
            // svg.setAttribute('width', rand(1000, 2000));
            // svg.setAttribute('height', rand(1000, 2000));
        } 
        setInterval(function () {
            randomize();
        }, 2000);
        // let
        //     pathCoordinates = [],
        //     vertixCountFactor = 0.6,
        //     centerX = 240,
        //     centerY = 240,
        //     radius = 100

        // function getRandomRadiusModifier() {
        //     let num = Math.floor(Math.random() * 10) + 1;
        //     num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        //     return num
        // }


        // for (let i = 0; i < 2 * Math.PI; i += vertixCountFactor) {
        //     let x = (radius * Math.cos(i) + centerX) + getRandomRadiusModifier();
        //     let y = (radius * Math.sin(i) + centerY) + getRandomRadiusModifier();
        //     pathCoordinates.push({ x, y });
        //     if (i + vertixCountFactor >= 2 * Math.PI) {
        //         pathCoordinates.push(pathCoordinates[0])
        //     };
        // };

        // // const newPath = catmullRom2bezier(pathCoordinates)
        // // path.setAttribute("d", newPath) 

        // function parsePath(path) {
        //     var pathArray = [];
        //     var lastX = "";
        //     var lastY = "";

        //     var d = path.getAttribute("d");
        //     // if ( -1 != d.search(/[rR]/) ) {
        //     // no need to redraw the path if no Catmull-Rom segments are found

        //     // split path into constituent segments
        //     var pathSplit = d.split(/([A-Za-z])/);
        //     for (var i = 0, iLen = pathSplit.length; iLen > i; i++) {
        //         var segment = pathSplit[i];

        //         // make command code lower case, for easier matching
        //         // NOTE: this code assumes absolution coordinates, and doesn't account for relative command coordinates
        //         var command = segment.toLowerCase()
        //         if (-1 != segment.search(/[A-Za-z]/)) {
        //             var val = "";
        //             if ("z" != command) {
        //                 i++;
        //                 val = pathSplit[i].replace(/\s+$/, '');
        //             }

        //             if ("r" == command) {
        //                 // "R" and "r" are the a Catmull-Rom spline segment

        //                 var points = lastX + "," + lastY + " " + val;

        //                 // convert Catmull-Rom spline to BÃ©zier curves
        //                 var beziers = catmullRom2bezier(points);
        //                 //insert replacement curves back into array of path segments
        //                 pathArray.push(beziers);
        //             } else {
        //                 // rejoin the command code and the numerical values, place in array of path segments
        //                 pathArray.push(segment + val);

        //                 // find last x,y points, for feeding into Catmull-Rom conversion algorithm
        //                 if ("h" == command) {
        //                     lastX = val;
        //                 } else if ("v" == command) {
        //                     lastY = val;
        //                 } else if ("z" != command) {
        //                     var c = val.split(/[,\s]/);
        //                     lastY = c.pop();
        //                     lastX = c.pop();
        //                 }
        //             }
        //         }
        //     }
        //     // recombine path segments and set new path description in DOM
        //     path.setAttribute("d", pathArray.join(" "));
        //     // }
        // }


        // function catmullRom2bezier(coordinates) {

        //     let d = "";
        //     coordinates.forEach((coord, index, array) => {
        //         let p = [];
        //         if (index === 0) {
        //             d += `M${coord.x},${coord.y} `;
        //             p.push(array[array.length - 3]);
        //             p.push(array[index]);
        //             p.push(array[index + 1]);
        //             p.push(array[index + 2]);
        //         } else if (index === array.length - 2) {
        //             p.push(array[index - 1]);
        //             p.push(array[index]);
        //             p.push(array[index + 1]);
        //             p.push(array[0]);
        //         } else if (index === array.length - 1) {
        //             return
        //         } else {
        //             p.push(array[index - 1]);
        //             p.push(array[index]);
        //             p.push(array[index + 1]);
        //             p.push(array[index + 2]);
        //         }
        //         let bp = [];
        //         bp.push({ x: p[1].x, y: p[1].y });
        //         bp.push({ x: ((-p[0].x + 6 * p[1].x + p[2].x) / 6), y: ((-p[0].y + 6 * p[1].y + p[2].y) / 6) });
        //         bp.push({ x: ((p[1].x + 6 * p[2].x - p[3].x) / 6), y: ((p[1].y + 6 * p[2].y - p[3].y) / 6) });
        //         bp.push({ x: p[2].x, y: p[2].y });
        //         d += "C" + bp[1].x + "," + bp[1].y + " " + bp[2].x + "," + bp[2].y + " " + bp[3].x + "," + bp[3].y + " ";

        //     })

        //     return d;
        // };


    }, [])

    return (
        <div id="gradient" className='background-gradient'>

            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path id="svg-path" fill="#FF0066" d="" transform="translate(100 100)" />
            </svg> */}

            {/* <div className="swirl"></div>
            <div className="swirl"></div>
            <div className="swirl"></div>
            <div className="swirl"></div> */}
            {/* <div class="swirl"></div> */}
            {/* <div class="swirl"></div> */}
        </div>
    )
}

export default background