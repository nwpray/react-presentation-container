import React from 'react';
import isFunction from 'lodash/isFunction';

const pipe = (fncs, initValue) => fncs.reduce((prevValue, fn) => fn(prevValue), initValue);

export default ({
  component: Component,
  filterProps,
  bindMembers = [],
  controller: Controller,
  middleware = []
}) => {
  const getContainer = () => {
    if (isFunction(Controller) && !!Controller.prototype.isReactComponent) {
      /* eslint-disable react/no-this-in-sfc */
      /* eslint-disable no-param-reassign */
      Controller.prototype.render = function controllerRender() {
        const boundMembers = bindMembers.reduce(
          (prevMembers, key) => ({ ...prevMembers, [key]: this[key] }),
          {}
        );

        return (
          <Component
            {...(filterProps ? filterProps(this.props) : this.props)}
            controller={{ ...boundMembers, state: this.state }}
          />
        );
      };
      /* eslint-enable */

      return Controller;
    }

    if (isFunction(Controller)) {
      if (bindMembers) {
        // eslint-disable-next-line no-console
        console.warn(
          `PresentationContainer warning: using bindMembers with a functional controller is not supported (${Controller.prototype.constructor.name})`
        );
      }

      return function FunctionalContainer(props, ...restOfArgs) {
        const state = Controller(props, ...restOfArgs);

        return <Component {...(filterProps ? filterProps(props) : props)} controller={state} />;
      };
    }

    return null;
  };

  const ContainerComponent = getContainer();

  return ContainerComponent ? pipe(middleware, ContainerComponent) : null;
};
