const Contact = ()=> {
    return (
        <div>
            <h2 className="font-bold p-4 m-4 text-3xl">Contact me on : </h2>
            <ol className="m-4 p-4">
                <li>Instagram</li>
                <li>X (formally Twitter)</li>
                <li>Mail</li>
            </ol>

            <form className="flex flex-col ">
                <input type="text" placeholder="name" className="text-black border border-black w-1/12 m-4 rounded-md pb-1 pl-1"></input>
                <textarea name="paragraph_text" placeholder="message" cols="50" rows="10" className="border border-black w-3/12 m-4 pl-1 rounded-md"></textarea>
                <button className= " border border-black rounded-sm w-16 bg-gray-200">Submit</button>
            </form>
        </div>
    )
}

export default Contact