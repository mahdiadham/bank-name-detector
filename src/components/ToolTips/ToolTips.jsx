const ToolTips = ({ toolTips }) => {
    return (
        <div className="w-full border-2 border-amber-400 rounded-lg overflow-hidden p-4 bg-amber-50">
            <ul className="text-sm text-amber-600 list-disc mr-4 leading-relaxed">
                {toolTips?.map((toolTip) => (
                    <li key={toolTip}>{toolTip}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToolTips;