import { PlusCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import AssetPicker from '../../../components/AssetPicker';
import AssetProvider from '../../../components/assetpicker/provider';
import { useCollection } from '../../../lib/collections/colprovider';
import { useSimpleSwap } from './provider';

const AddIngredientSimpleSwap = () => {
  const [open, setOpen] = useState(false);
  const { collection } = useCollection();
  const { setIngredient } = useSimpleSwap();

  const pickTarget = (collection: string, schema: string, template: string, image: string) => {
    if (collection === '' || schema === '' || schema === '' || template === '' || image === '')
      return;

    setIngredient({
      collection,
      schema,
      template,
      image
    });

    setOpen(false);
  };

  return (
    <AssetProvider collection_name={collection} pick={pickTarget}>
      <AssetPicker open={open} onClose={() => setOpen(false)} />

      <button
        onClick={() => setOpen(true)}
        type="button"
        className="border-2 border-sage rounded-xl h-64 w-52 flex items-center justify-center"
      >
        <p className="text-center text-sage inline-flex flex-col items-center">
          <PlusCircleIcon className="h-10 w-10" />
          <span className="text-xl font-black">Select Ingredient</span>
        </p>
      </button>
    </AssetProvider>
  );
};

export default AddIngredientSimpleSwap;
