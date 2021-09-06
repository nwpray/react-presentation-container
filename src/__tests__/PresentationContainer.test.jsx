import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import PresentationContainer from '../PresentationContainer';

const { describe, expect, it, jest } = global;

describe('PresentationContainer() (class controller)', () => {
  it('renders', () => {
    const MockChild = () => {
      return <h1>Working</h1>;
    };

    const WrappedComponent = PresentationContainer({
      component: MockChild,
      controller: class MockChildController extends React.Component {}
    });

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchSnapshot();
  });
});

describe('PresentationContainer() (function controller)', () => {
  it('renders', () => {
    const MockChild = () => {
      return <h1>Working</h1>;
    };

    const WrappedComponent = PresentationContainer({
      component: MockChild,
      controller: function MockChildController() {}
    });

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchSnapshot();
  });

  it('filters props', () => {
    const MockChild = () => {
      return <h1>Working</h1>;
    };

    const WrappedComponent = PresentationContainer({
      component: MockChild,
      filterProps: ({ propA }) => ({ propA }),
      controller: function MockChildController() {}
    });

    const { container } = render(<WrappedComponent propA="propA" propB="propB" propC="propC" />);
  });
});

// test('form submits two answers', () => {
//   const allQuestions = ['q1', 'q2'];
//   const mockFn = jest.fn();

//   const { getAllByA11yLabel, getByText } = render(
//     <QuestionsBoard questions={allQuestions} onSubmit={mockFn} />
//   );

//   const answerInputs = getAllByA11yLabel('answer input');

//   fireEvent.changeText(answerInputs[0], 'a1');
//   fireEvent.changeText(answerInputs[1], 'a2');
//   fireEvent.press(getByText('Submit'));

//   expect(mockFn).toBeCalledWith({
//     '1': { q: 'q1', a: 'a1' },
//     '2': { q: 'q2', a: 'a2' }
//   });
// });
