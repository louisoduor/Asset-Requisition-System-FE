

const Login = () => {

    return <div className="form-container my-20 ">
        <form className="form flex flex-col items-center gap-y-3 shadow ">
            <img src="src/assets/LOGO.png" alt="" />
            <div className="flex flex-col gap-y-3">
                <label htmlFor="email" className="capitalize font-semi-bold ">email:</label>
                <input className=" py-1.5 px-2.5 bg-gray-100 outline-orange-400" type="email" id="email" name= "email" placeholder="donjoe@mail.com" />
            </div>
            <div className="flex flex-col gap-y-3">
                <label htmlFor="password" className="capitalize font-semi-bold">password:</label>
                <input className=" py-1.5 px-2.5 bg-gray-100 outline-orange-400" type="password" id="password" name="password"/>
            </div>
            <div className="mt-4 text-sm font-bold">
                <button className="px-5 py-2  bg-orange-500 text-white uppercase rounded border-0">login</button>
            </div>
            </form>
    </div>
}


export default Login 