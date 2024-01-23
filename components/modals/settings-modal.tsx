'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
} from '@/components/ui/dialog'
import { useSettings } from '@/hooks/use-settings'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/mode-toggle'

export const SettingsModal = () => {
    const settings = useSettings();

    return (
        <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
            <DialogContent>
                <DialogHeader className='border-b pb-3 dark:text-muted-foreground'>
                    <h2 className='text-lg font-medium'>
                        My settings
                    </h2>
                </DialogHeader>
                <div className='flex items-center justify-between dark:text-muted-foreground'>
                    <div className='flex flex-col gap-y-1'>
                        <Label className='dark:text-muted-foreground'>
                            Appearance
                        </Label>
                        <span className='text-[0.8rem] text-muted-foreground'>
                            Customize how Tomtion looks on your device
                        </span>
                    </div>
                    <ModeToggle />
                </div>
            </DialogContent>
        </Dialog>
    )
}
