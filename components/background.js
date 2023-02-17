import React, { useEffect, useState } from 'react'
import blobshape from "blobshape";

function Background() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });

        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        const rand = (min, max) => Math.random() * (max - min) + min;
        const randInt = (min, max) => (Math.random() * (max - min) + min).toFixed(0);
        const randomBlobs = [
            "M48.8,-70.2C60.5,-58.7,65.4,-40.8,63.8,-25.5C62.1,-10.3,53.8,2.3,51.6,19.2C49.4,36.1,53.3,57.3,45.7,68.8C38.1,80.2,19,81.8,1.1,80.3C-16.9,78.8,-33.8,74.3,-38,61.8C-42.3,49.3,-33.9,28.8,-36.1,13.7C-38.4,-1.4,-51.1,-11.1,-49.9,-16.6C-48.6,-22.1,-33.3,-23.4,-22.6,-35.3C-12,-47.1,-6,-69.5,6.3,-78.1C18.5,-86.8,37.1,-81.7,48.8,-70.2Z",
            "M26.1,-34.4C33.3,-30.8,38,-22.3,46.9,-11.3C55.9,-0.3,69.2,13.3,64.8,19.3C60.4,25.3,38.3,23.8,24.6,30.4C10.8,37,5.4,51.6,-6.4,60.5C-18.3,69.3,-36.6,72.4,-43.2,63.5C-49.9,54.7,-44.9,33.8,-50.6,16.4C-56.4,-1,-72.9,-15,-72.2,-25.5C-71.6,-35.9,-53.8,-42.8,-38.9,-43.8C-24.1,-44.9,-12,-40.1,-1.3,-38.4C9.5,-36.6,19,-38,26.1,-34.4Z",
            "M46.7,-61.9C56.9,-56.8,59.2,-38.4,60.3,-22.5C61.4,-6.7,61.4,6.6,55.6,16.1C49.8,25.6,38.4,31.3,28.1,35.8C17.9,40.4,9,43.8,-0.3,44.2C-9.6,44.6,-19.1,42.1,-28.4,37.2C-37.8,32.4,-46.8,25.3,-52.5,15.3C-58.2,5.3,-60.6,-7.6,-59.7,-22.1C-58.7,-36.7,-54.4,-52.8,-43.9,-57.8C-33.4,-62.8,-16.7,-56.6,0.7,-57.7C18.2,-58.7,36.4,-66.9,46.7,-61.9Z",
            "M30.9,-37.2C40.5,-35.6,48.9,-27.1,58.3,-15C67.6,-2.9,77.9,12.9,72.6,21.9C67.4,31,46.7,33.4,32,43.4C17.3,53.5,8.7,71.2,-5.4,78.6C-19.5,86.1,-39,83.3,-43.1,69.8C-47.3,56.4,-36.1,32.2,-40.6,14.2C-45.1,-3.8,-65.2,-15.8,-68.8,-27.9C-72.5,-39.9,-59.6,-52.2,-45.4,-52.3C-31.2,-52.3,-15.6,-40.3,-2.5,-36.9C10.7,-33.5,21.3,-38.7,30.9,-37.2Z",
            "M12.4,-21.7C17.2,-18.6,23,-17.6,25.3,-14.4C27.5,-11.1,26.3,-5.5,26,-0.2C25.7,5.2,26.4,10.5,22.3,10.5C18.2,10.6,9.2,5.5,4.7,8.9C0.1,12.4,0.1,24.4,-6.3,35.3C-12.6,46.1,-25.2,55.8,-32.4,53.9C-39.5,52,-41.2,38.4,-35.2,27.4C-29.3,16.5,-15.6,8.3,-18.2,-1.5C-20.8,-11.2,-39.5,-22.4,-39.8,-23.6C-40.2,-24.7,-22,-15.7,-12.3,-15.9C-2.6,-16.1,-1.3,-25.4,1.2,-27.6C3.8,-29.7,7.6,-24.7,12.4,-21.7Z",
            "M43.7,-56.7C55.1,-51.9,61.9,-37.1,61.9,-23.3C62,-9.6,55.4,3.1,52.4,18.5C49.4,33.8,50,51.7,41.9,55.5C33.7,59.3,16.9,48.9,3.8,43.7C-9.3,38.4,-18.6,38.4,-23.3,33.5C-28.1,28.7,-28.4,19,-38.9,7.6C-49.5,-3.7,-70.3,-16.7,-75,-31.2C-79.7,-45.8,-68.3,-62,-53.1,-65.7C-37.9,-69.3,-18.9,-60.4,-1.4,-58.5C16.1,-56.6,32.3,-61.6,43.7,-56.7Z",
            "M30.8,-48.8C39.5,-36.1,45.9,-26.5,51.5,-15.3C57.2,-4,62.2,8.9,56,15.1C49.7,21.4,32.3,21,21.1,21.2C10,21.5,5,22.4,-5.8,30.3C-16.5,38.3,-33.1,53.3,-46.6,53.8C-60.2,54.3,-70.7,40.4,-74.3,25.1C-77.8,9.9,-74.3,-6.6,-63.4,-14.6C-52.5,-22.5,-34.1,-22.1,-22.3,-33.7C-10.5,-45.4,-5.2,-69.2,2.9,-73.2C11.1,-77.3,22.1,-61.5,30.8,-48.8Z",
            "M38.9,-55.9C50.1,-45.4,58.6,-33.6,67.2,-19.1C75.8,-4.5,84.3,12.9,77.5,22.4C70.6,32,48.2,33.8,32.7,43.2C17.2,52.7,8.6,69.7,-1.4,71.6C-11.3,73.4,-22.7,60.1,-37.5,50.5C-52.3,40.8,-70.7,34.9,-75.8,23.6C-81,12.2,-73,-4.4,-65,-18.7C-57,-32.9,-49,-44.7,-38.2,-55.3C-27.4,-65.9,-13.7,-75.3,0.1,-75.5C13.9,-75.6,27.7,-66.4,38.9,-55.9Z",
            "M38.2,-57.4C45.7,-47.2,45.1,-30.9,50.9,-15.9C56.7,-0.9,68.9,12.7,63.6,18C58.3,23.3,35.4,20.3,21.9,23.1C8.4,25.8,4.2,34.4,-2.6,37.9C-9.3,41.4,-18.6,39.9,-30.4,36.6C-42.2,33.3,-56.5,28.1,-57.9,19.8C-59.2,11.4,-47.7,-0.2,-40.5,-10.3C-33.3,-20.5,-30.4,-29.2,-24.4,-39.9C-18.4,-50.5,-9.2,-63.1,3.1,-67.4C15.4,-71.7,30.8,-67.6,38.2,-57.4Z"
        ]
        const container = document.querySelector("#gradient");
        const minRangeColor = 50
        const maxRangeColor = 150
        const blobPositions = []
        const blobCount = window.innerWidth < 600 ? 3 : 3;
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", `0 0 100 100`)
        svg.setAttribute("class", "svg-blobs") 
        svg.setAttribute("width", window.innerWidth)
        svg.setAttribute("height", window.innerHeight)
        const blobSize = window.innerWidth < 600 ? 200 : 200; 
        const edges = 10 
        for (let j = 0; j <= 1; j++) {
            const pos = j === 0 ? -100 : j === 1 ? 0 : 100
            for (let i = -blobCount; i <= blobCount; i++) {
                blobPositions.push([pos, (100 / blobCount) * i])
            }
        } 
        blobPositions.forEach((blob, i) => {
            let pathBlob = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const { path } = blobshape({ size: blobSize, growth: 2, edges: edges, seed: null });
            pathBlob.setAttribute("id", `svg-path-${i}`)
            pathBlob.setAttribute("class", `svg-blob`)
            pathBlob.setAttribute("fill", `rgba(${rand(20, 150)}, ${rand(20, 150)}, ${rand(20, 150)}, ${rand(.5, 1)})`);
            pathBlob.setAttribute("d", path);
            pathBlob.setAttribute("transform", `scale(1) translate(${blob[0]} ${blob[1]})`)
            svg.appendChild(pathBlob)
        })
        container.appendChild(svg)
        function randomize() {
            blobPositions.forEach((blob, i) => {
                const { path } = blobshape({ size: blobSize, growth: 2, edges: edges, seed: null });
                let pathBlob = document.getElementById(`svg-path-${i}`)
                pathBlob.setAttribute("d", path);
                pathBlob.setAttribute("fill", `rgba(${rand(minRangeColor, maxRangeColor)}, ${rand(minRangeColor, maxRangeColor)}, ${rand(minRangeColor, maxRangeColor)}, ${rand(.5, 1)})`);

            })
        }
        setTimeout(function () {
            randomize();
        }, 100);
        setInterval(function () {
            console.log("random interval")
            randomize();
        }, 7000);

    }, [])

    return (
        <>
            <div className='glass'></div>
            <div id="gradient" className='background-gradient'></div>
        </>

    )
}

export default Background