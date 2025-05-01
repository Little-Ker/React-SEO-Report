import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import {
  Dialog, DialogTitle, IconButton, DialogContent
} from '@mui/material'
import { Logout } from '@mui/icons-material'

import styles from './dialog.module.sass'

function BasicDialog(props) {
  const {
    children, open, setOpen, title,
  } = props

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Dialog
      onClose={(handleClose)}
      open={open}
      style={{ zIndex: 9999999 }}
      className={styles.dialog}
      PaperProps={{
        style: {
          maxWidth: 'none',
          borderRadius: '1rem',
        },
      }}
    >
      <div className={styles.content}>
        <DialogTitle className={styles.dialogTitle}>
          <p className={styles.text}>{title}</p>
          <IconButton
            onClick={handleClose}
          >
            <Logout />
          </IconButton>
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {children}
        </DialogContent>
      </div>
    </Dialog>
  )
}

BasicDialog.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
}

BasicDialog.defaultProps = {
  children: {},
  open: false,
  setOpen: () => {},
  title: '',
}

export default BasicDialog
