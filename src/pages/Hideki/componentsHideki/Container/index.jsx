const Container = ({ children }) => {
    return ( 
        <main className="px-16 py-12 h-screen w-screen bg-black text-white">
            {children}
        </main>
     );
}
 
export default Container;