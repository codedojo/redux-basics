export function loadState(key = 'state') {
    try {
        let json = localStorage.getItem(key);

        if (json === null) {
            return undefined;
        } else {
            return key !== 'state' ? { [key]: JSON.parse(json) } : JSON.parse(json);
        }
    } catch (error) {
        return undefined;
    }
}

export default key => store => next => action => {
    let result = next(action);

    try {
        let json = JSON.stringify(key ? store.getState()[key] : store.getState());
        localStorage.setItem(key || 'state', json);
    } catch (error) {
        console.error(error);
    }

    return result;
};