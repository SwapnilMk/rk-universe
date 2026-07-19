import React from 'react';
import { prisma } from '@/lib/prisma';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const dynamic = 'force-dynamic';

export default async function StoriesPage() {
  const stories = await prisma.story.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">Stories</h2>
      </div>

      <div className="rounded-md border border-white/10 bg-black/40">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="text-white/60">Date</TableHead>
              <TableHead className="text-white/60">Full Name</TableHead>
              <TableHead className="text-white/60">Category</TableHead>
              <TableHead className="text-white/60">City</TableHead>
              <TableHead className="text-white/60">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-white/40 py-8">
                  No stories found.
                </TableCell>
              </TableRow>
            ) : (
              stories.map((story) => (
                <TableRow key={story.id} className="border-white/10 hover:bg-white/5 text-white/80">
                  <TableCell>{new Date(story.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="font-medium text-white">{story.fullName}</TableCell>
                  <TableCell>{story.category}</TableCell>
                  <TableCell>{story.city}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      story.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                      story.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {story.status.toUpperCase()}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
