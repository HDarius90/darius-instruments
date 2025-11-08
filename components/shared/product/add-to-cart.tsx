'use client';

import { Button } from '@/components/ui/button';
import { addItemToCart } from '@/lib/actions/cart.actions';
import { CartItem } from '@/types';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);

      return;
    }

    toast.success(res.message, {
      action: (
        <Button
          className='bg-primary text-white hover:bg-gray-800'
          onClick={() => router.push('/cart')}
        >
          Go to cart
        </Button>
      ),
    });
  };

  return (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      <Plus />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
