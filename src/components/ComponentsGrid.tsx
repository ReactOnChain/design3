'use client';

import { UIComponent } from '@/data/components';
import ComponentCard from './ComponentCard';

interface ComponentsGridProps {
  components: UIComponent[];
}

export default function ComponentsGrid({ components }: ComponentsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {components.map((component) => (
        <ComponentCard key={component.id} component={component} />
      ))}
    </div>
  );
} 