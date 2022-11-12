import React from "react";
import Boxes from "./Boxes";

const boxContent=[
    {content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.'},
    {content : 'Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.'},
    {content : 'Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.'},
    {content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi ut nisi adipiscing lectus egestas mollis. Vestibulum eget nulla ut est imperdiet lacinia. Aliquam blandit augue non sapien. Ut volutpat consectetuer pede. In a quam. Etiam cursus congue mi. Cras pretium euismod augue. Sed faucibus varius velit. Sed pulvinar, libero sit amet imperdiet semper, elit elit suscipit lacus, non sollicitudin mi justo id felis.'},
    {content : 'Sed fringilla. Ut at arcu vel arcu condimentum imperdiet. Morbi lorem nisl, fermentum ac, feugiat eget, auctor vel, velit. Vestibulum venenatis. In hac habitasse platea dictumst. Curabitur tristique diam. Donec mauris. Aenean interdum semper metus. Curabitur et leo. Phasellus vel lorem sit amet velit dictum ornare. Ut et metus ac est sagittis auctor. Quisque nisi odio, scelerisque at, lacinia at, tincidunt ac, orci.'},
    {content : 'Cras venenatis imperdiet purus. Donec id justo ultricies libero sagittis elementum. Ut consectetuer fermentum elit. Donec bibendum nunc. Proin scelerisque vulputate sem. Nullam dui magna, semper id, blandit vel, euismod eget, tellus. Sed at erat. Praesent at erat rutrum ipsum dapibus porttitor. Fusce eu quam vel velit tincidunt sodales. Ut posuere urna id nulla.'}
]

export default function Content(){
    return <section className='G-container p-section1'>
        <p>
            Chicanery is a free template created by Sadhana Ganapathiraju, aka SimplyGold. It's released under
            <a href="/">Creative Commons Attribution-NonCommercial- ShareAlike 2.5 License</a>
            , which means that you can use it, modify it, and pretty much do whatever you want with the files as long as you don't resell it or use it for commercial purposes.
        </p>
        <p>If you want to be able to use the templates for commercial purposes, contact me. I included a small link at the bottom that says "Design by Sadhana Ganapathiraju." You aren't required to keep it, but if you do, it's much appreciated. :-)</p>
        <div className='G-container containers'>
            {boxContent.map(box=>(
                    <Boxes content = {box.content}/>

                ))}
        </div>
    </section>
}