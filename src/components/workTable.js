import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Paper from "@material-ui/core/Paper"
import Tooltip from "@material-ui/core/Tooltip"
import Heading from "./heading"
import arrow from "../assets/arrow_white.svg"

const WorkWrapper = styled.div`
  width: 100%;
  @media (max-width: 980px) {
    width: auto;
    margin: 20px;
  }
`
const WorkMargin = styled.div`
  max-width: 940px;
  margin: 0 auto;
  .position_title {
    font-size: 15px;
    padding-top: 20px;
  }
  .position {
    vertical-align: top;
    font-size: 15px;
    padding-top: 20px;
  }
  .position_content p,
  .position_content ul li {
    font-size: 13px;
    color: var(--subtitle-gray);
  }
  .position_content ul {
    padding-top: 20px;
  }
  .position_content ul li {
    padding-bottom: 5px;
  }
  .work_reply a div {
    background: linear-gradient(
      90deg,
      var(--main-pink) 0%,
      var(--main-yellow) 50%,
      var(--main-yellow) 100%
    );
    background-size: 200% 100%;
    transition: 0.8s;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 15px;
    cursor: pointer;
    font-weight: 600;
    margin-right: 25px;
    margin-left: 25px;
    border-radius: 20px;
    width: 180px;
    span {
      color: var(--main-white);
      text-decoration: none !important;
      transition: 0.8s;
      margin-left: 33px;
      :after {
        transition: 0.8s;
        content: "";
        width: 9px;
        height: 9px;
        opacity: 1;
        background: url(${arrow});
        background-size: cover;
        background-repeat: none;
        margin-left: 20px;
        background-size: cover;
        display: inline-block;
        opacity: 0;
      }
    }
    :hover {
      transition: 0.8s;
      background: linear-gradient(
        90deg,
        var(--main-pink) 0%,
        var(--main-yellow) 50%,
        var(--main-yellow) 100%
      );
      background-size: 200% 100%;
      background-position: right;
      span {
        margin-left: 0;
      }
      span:after {
        opacity: 1;
      }
    }
  }
`

let counter = 0
function createData(name, html, fat) {
  counter += 1
  return { id: counter, name, html, fat }
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}

const rows = [
  { id: "name", numeric: false, disablePadding: true, label: "Pozícia" },
  { id: "fat", numeric: true, disablePadding: false, label: "Voľné miesta" },
]

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const { order, orderBy } = this.props

    return (
      <TableHead>
        <TableRow>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "default" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Klikni pre zoradenie"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    )
  }
}

EnhancedTableHead.propTypes = {
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    boxShadow: "0 20px 40px 0 rgba(0,0,0,.05)",
    borderRadius: 0,
    width: "100%",
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: "auto",
  },
})

class EnhancedTable extends React.Component {
  state = {
    order: "desc",
    orderBy: "fat",
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
  }

  componentWillMount() {
    const post_data = this.props.data.allMarkdownRemark.edges.filter(
      post => post.node.frontmatter.type === "pozicie"
    )
    const state_data = []
    console.log(post_data)
    post_data.forEach(post => {
      state_data.push(
        createData(
          post.node.frontmatter.position,
          post.node.html,
          post.node.frontmatter.space
        )
      )
    })
    this.setState({ data: state_data })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = "desc"

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc"
    }

    this.setState({ order, orderBy })
  }

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }))
      return
    }
    this.setState({ selected: [] })
  }

  handleClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    this.setState({ selected: newSelected })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  render() {
    const { classes } = this.props
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <WorkWrapper>
        <WorkMargin>
          <Heading
            title="pracovná ponuka"
            subtitle="Prehľad ponúkaných pracovných miest"
          />
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody>
                  {stableSort(data, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      const isSelected = this.isSelected(n.id)
                      const mailTo = `mailto:agenturapas@agenturapas.sk?subject=${
                        n.name
                      }`
                      return (
                        <TableRow
                          hover
                          /* onClick={event => this.handleClick(event, n.id)}
                          role="checkbox" */
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={n.id}
                          selected={isSelected}
                        >
                          <TableCell
                            className="position_title"
                            component="th"
                            scope="row"
                          >
                            {n.name}
                            <div
                              className="position_content"
                              dangerouslySetInnerHTML={{ __html: n.html }}
                            />
                            <div className="work_reply">
                              <a href={mailTo}>
                                <div>
                                  <span>Reagovať na ponuku</span>
                                </div>
                              </a>
                            </div>
                          </TableCell>
                          <TableCell className="position" align="right">
                            {n.fat}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              labelDisplayedRows={({ from, to, count }) =>
                `${from}-${to} z ${count} pozícií`
              }
              labelRowsPerPage="Pozície na stránku:"
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "Predošlá stránka",
              }}
              nextIconButtonProps={{
                "aria-label": "Nasledujúca stránka",
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        </WorkMargin>
      </WorkWrapper>
    )
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EnhancedTable)
