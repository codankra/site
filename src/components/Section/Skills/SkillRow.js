import PropTypes from "prop-types"
import React from "react"
import * as styles from "./SkillRow.module.css"

import ProgressBar from "react-bootstrap/ProgressBar"

const SkillRow = ({ name, percent, theme, isPrimary = false }) => {
  const variant =
    theme ||
    (percent < 25
      ? "warning"
      : percent < 50
      ? "secondary"
      : percent < 75
      ? "info"
      : "success")
  const nameStyleSwitch = isPrimary
    ? { fontWeight: "bold" }
    : { fontWeight: "normal" }
  return (
    <tr className={styles.hoverchild2}>
      <th scope="row" className={styles.name} style={nameStyleSwitch}>
        {name}
      </th>
      <td colSpan="4" className={`border-left`}>
        <ProgressBar
          className={styles.middleProg}
          variant={variant}
          now={percent}
          sronly="true"
        />
      </td>
    </tr>
  )
}
SkillRow.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
}
export default SkillRow
