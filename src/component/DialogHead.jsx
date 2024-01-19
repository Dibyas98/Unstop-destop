import React from 'react'
import { X } from 'lucide-react';

export default function DialogHead({dia}) {
    return (
        <div className="dialog-head">
            <h1>Create new Assessment</h1>
            <X onClick={()=>{dia()}}></X>
        </div>
    )
}
