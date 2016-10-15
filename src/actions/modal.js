import modalConstants from '../constants/modal';

export function openModal(gif) {
    return {
        type: modalConstants.OPEN_MODAL,
        gif
    }
}

export function closeModal() {
    return {
        type: modalConstants.CLOSE_MODAL
    }
}
