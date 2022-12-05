const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {

            basename: process.env.BASENAME || ""

        }, 
        actions: {

        }
    }
}

export default getState;