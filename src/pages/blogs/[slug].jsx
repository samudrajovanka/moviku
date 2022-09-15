import React from 'react';

import { useRouter } from 'next/router';

const DetailBlogPage = () => {
  const router = useRouter();

  // {slug: 'name'}
  const { slug } = router.query;

  return <div>Halaman {slug}</div>;
};

export default DetailBlogPage;
