class Outlet {
    constructor() {
        window.addEventListener("hashchange", () => {
            console.log("Mudou de rota: " + window.location.hash );
        });
    }
}

export default Outlet;