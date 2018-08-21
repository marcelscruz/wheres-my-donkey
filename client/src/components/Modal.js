// ***** React ***** //
import React from 'react'

// ***** Redux ***** //
import { connect } from 'react-redux'
import { toggleModal } from '../actions/modal'

// ***** Libraries ***** //
import ReactModal from 'react-modal'

// ***** Components ***** //
import Lightbox from './Lightbox'

export const Modal = ({ modal, toggleModal }) => (
  <ReactModal
    ariaHideApp={false}
    className="modal"
    closeTimeoutMS={200}
    contentLabel="Selected photo"
    isOpen={!!modal}
    onRequestClose={() => {
      toggleModal(null)
    }}
  >
    {!!modal && <Lightbox photo={modal} toggleModal={toggleModal} />}
  </ReactModal>
)

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal(null)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
