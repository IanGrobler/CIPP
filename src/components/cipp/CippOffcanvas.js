import React from 'react'
import PropTypes from 'prop-types'
import {
  CButton,
  CListGroup,
  CListGroupItem,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasBody,
  COffcanvasTitle,
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function CippOffcanvas(placement, title, visible, id, hideFunction) {
  return (
    <>
      <COffcanvas
        className="cipp-offcanvas"
        visible={visible}
        placement={placement}
        id={id}
        aria-labelledby={title}
        onHide={hideFunction}
      >
        <COffcanvasHeader>
          <h2>{title}</h2>
          <CButton className="cipp-offcanvas-close" color="link" onClick={hideFunction}>
            <FontAwesomeIcon size="lg" icon={faTimes} color="link" />
          </CButton>
        </COffcanvasHeader>
        <COffcanvasBody>children</COffcanvasBody>
      </COffcanvas>
    </>
  )
}

const CippOffcanvasPropTypes = {
  children: PropTypes.node,
  placement: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  id: PropTypes.string.isRequired,
  hideFunction: PropTypes.func.isRequired,
}

CippOffcanvas.propTypes = CippOffcanvasPropTypes

export function CippGroupedOffcanvas(
  extendedInfo,
  actions,
  placement,
  title,
  visible,
  id,
  hideFunction,
) {
  console.log(extendedInfo)
  console.log(actions)
  const extendedInfoContent = extendedInfo.map((info, index) => (
    <CListGroup layout="horizontal-md" key={index}>
      <CListGroupItem className="cipp-extendedinfo-label">{info.label}</CListGroupItem>
      <CListGroupItem className="cipp-extendedinfo-value">{info.value}</CListGroupItem>
    </CListGroup>
  ))
  const actionsContent = actions.map((action, index) => (
    <CListGroup layout="horizontal-md" key={index}>
      <CListGroupItem
        className="cipp-action"
        component="button"
        color={action.color}
        href={action.link}
      >
        {action.icon}
        {action.label}
      </CListGroupItem>
    </CListGroup>
  ))
  return (
    <CippOffcanvas
      visible={visible}
      placement={placement}
      id={id}
      title={title}
      hideFunction={hideFunction}
    >
      <COffcanvasTitle>Extended Information</COffcanvasTitle>
      {extendedInfoContent}
      <COffcanvasTitle>Actions</COffcanvasTitle>
      {actionsContent}
    </CippOffcanvas>
  )
}

const CippGroupedOffcanvasPropTypes = {
  extendedInfo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    }),
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.element,
      color: PropTypes.string,
    }),
  ).isRequired,
  placement: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  id: PropTypes.string.isRequired,
  hideFunction: PropTypes.func.isRequired,
}

CippGroupedOffcanvas.propTypes = CippGroupedOffcanvasPropTypes
