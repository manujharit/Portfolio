import ManujPhoto from '../../assets/ManujPhoto.jpeg'
const Navbar = () => {
    return (
        <div className="sticky top-0 mb-10 py-2 flex items-center w-full border-b-2 border-teal-800 bg-slate-700 rounded-b-lg">
            <img src={ManujPhoto} alt="Logo" className='w-[10%] rounded-full' />
            <label className='text-xl font-bold text-teal-500 px-10'>MANUJ HARITWAL</label>

        </div>
    )
}

export default Navbar