import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = (prop) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    medium,
    bold,
  } = prop;

  const classes = classNames(className, style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style.medium]: medium},
    {[style.bold]: bold},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return (
    <As className={classes} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  medium: PropTypes.bool,
  bold: PropTypes.bool,
};
