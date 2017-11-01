import '../style';
import React from 'react';
import RcCollapse, { Panel } from 'rc-collapse';
class Accordion extends React.Component {
  static Panel = Panel;
  render() {
    return <RcCollapse {...this.props} />;
  }
}
Accordion.defaultProps = {
    prefixCls: 'am-accordion',
};
Accordion.propTypes = {
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  activeKey:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
  ]),
  defaultActiveKey:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
  ]),
  openAnimation:React.PropTypes.any,
  accordion: React.PropTypes.bool,
  onChange:React.PropTypes.func,
  styles: React.PropTypes.any
};
Accordion.displayName = "Accordion";
module.exports=Accordion;
