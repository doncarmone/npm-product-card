import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Product title',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10,
      }} >
      {
        ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            {/* Add more Components maybe */}
          </>
        )
      }
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
