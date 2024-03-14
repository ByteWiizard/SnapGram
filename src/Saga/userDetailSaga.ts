import { put, takeLatest } from 'redux-saga/effects';
import { setUser, setIsAuthenticated, setLoading } from '@/Reducer/SignInUser';
import { getCurrentAccount } from '@/lib/AppWrite/api';


async function* fetchCurrentUser() {

    const currentAccount = await getCurrentAccount();

    try {
        if (currentAccount) {
            yield put(setUser({
                id: currentAccount.$id,
                name: currentAccount.name,
                username: currentAccount.username,
                email: currentAccount.email,
                imageUrl: currentAccount.imageUrl,
                bio: currentAccount.bio,
            }))
            yield put(setIsAuthenticated(true));
        }
    } catch (error) {
        console.error(error); // eslint-disable-line no-console
    } finally {
        yield put(setLoading(false));
    }
}



function* mainSaga() {
    yield takeLatest('FETCH_CURRENT_USER', fetchCurrentUser);
}

export default mainSaga;


