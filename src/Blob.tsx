import Spline from '@splinetool/react-spline';
import { useRef } from 'react';
import './Blob.css'

export default function Blob() {
    const transblob = useRef<THREE.Object3D | null>(null);

    function onload(spline: any){
        const blob = spline.findObjectById('8cb38db9-0d1b-42af-8ac7-8d930026c83c');

        transblob.current = blob;
    }

    function moveBlob(){
        if (transblob.current) {
            console.log(transblob.current);

            transblob.current.position.x += 10;
        }
    }

    return (
        <div>
            <Spline
                scene="https://prod.spline.design/BKzVCK3es3jwln2y/scene.splinecode"
                onLoad={onload}
            />
            <button onClick={moveBlob}>Move Blob</button>
        </div>
    );
}